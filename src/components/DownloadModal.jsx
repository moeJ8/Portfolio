import { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import PlatformIcon from './PlatformIcon';
import { downloadManager, formatBytes } from '../utils/downloadManager';

const DownloadModal = ({ isOpen, onClose, file }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [downloadedBytes, setDownloadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);
  const [downloadError, setDownloadError] = useState(null);
  const [currentDownloadId, setCurrentDownloadId] = useState(null);

  // Handle download cancellation
  const handleCancel = () => {
    if (isDownloading && currentDownloadId) {
      downloadManager.cancelDownload(currentDownloadId);
    }
    setIsDownloading(false);
    setDownloadProgress(0);
    setDownloadedBytes(0);
    setTotalBytes(0);
    setDownloadSpeed(0);
    setDownloadError(null);
    setCurrentDownloadId(null);
    onClose();
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadError(null);
    setDownloadedBytes(0);
    setTotalBytes(file.sizeBytes || 0);

    const startTime = Date.now();

    try {
      // Track download analytics
      downloadManager.trackDownload(file.filename, file.size);

      // Start the real download with progress tracking
      const result = await downloadManager.downloadFile(
        file.url, 
        file.filename, 
        (progress, loaded, total) => {
          setDownloadProgress(progress);
          setDownloadedBytes(loaded);
          setTotalBytes(total);
          
          // Calculate download speed
          const elapsed = (Date.now() - startTime) / 1000; // seconds
          const speed = elapsed > 0 ? loaded / elapsed : 0; // bytes per second
          setDownloadSpeed(speed);
        }
      );

      // Store download ID for potential cancellation
      if (result?.downloadId) {
        setCurrentDownloadId(result.downloadId);
      }

      // Download completed successfully
      setDownloadProgress(100);
      
      // Show completion for a moment, then close
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
        setDownloadedBytes(0);
        setTotalBytes(0);
        setDownloadSpeed(0);
        setCurrentDownloadId(null);
        onClose();
      }, 1500);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError(error.message);
      setIsDownloading(false);
      setDownloadProgress(0);
      setDownloadedBytes(0);
      setTotalBytes(0);
      setDownloadSpeed(0);
      setCurrentDownloadId(null);
    }
  };

  if (!isOpen || !file) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-600/40 overflow-hidden">
        
        {/* Header */}
        <div className="relative bg-slate-50 dark:bg-slate-900/50 px-6 py-4">
          <button
            onClick={handleCancel}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center">
            <div className="mr-4">
              <PlatformIcon platform="purple" size="sm">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </PlatformIcon>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Download File</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Ready to download</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* File Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white">{file.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{file.filename}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-slate-900 dark:text-white">{file.size}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{file.type}</div>
              </div>
            </div>
            
            {file.description && (
              <p className="text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 border border-slate-200 dark:border-slate-600/40">
                {file.description}
              </p>
            )}
          </div>

          {/* Download Progress */}
          {isDownloading && (
            <div className="mb-6">
              {/* Progress Container with Enhanced Glassmorphism */}
              <div className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/60 dark:border-blue-800/60 rounded-xl p-4 shadow-lg">
                
                {/* Status Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {downloadProgress >= 100 ? (
                      <div className="w-5 h-5 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                      </div>
                    )}
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      {downloadProgress >= 100 ? 'Download Complete!' : 'Downloading...'}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-900 dark:text-blue-100">
                    {Math.round(downloadProgress)}%
                  </span>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className="relative mb-3">
                  <div className="w-full h-3 bg-blue-100/50 dark:bg-blue-800/30 backdrop-blur-sm rounded-full overflow-hidden border border-blue-200/40 dark:border-blue-700/40 shadow-inner">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden shadow-sm"
                      style={{ width: `${downloadProgress}%` }}
                    >
                      {/* Subtle animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Download Stats */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-700 dark:text-blue-300 font-medium">
                    {formatBytes(downloadedBytes)} / {formatBytes(totalBytes)}
                  </span>
                  {downloadSpeed > 0 && (
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {formatBytes(downloadSpeed)}/s
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {downloadError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/60 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-red-800 dark:text-red-200">Download Failed</h4>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">{downloadError}</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                    Please check your internet connection and try again.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <CustomButton
              onClick={handleDownload}
              variant={downloadError ? "tealAnimated" : "blueAnimated"}
              size="lg"
              className="flex-1"
              disabled={isDownloading}
              loading={isDownloading}
            >
              {isDownloading ? (
                "Downloading..."
              ) : downloadError ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Retry Download
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Now
                </>
              )}
            </CustomButton>
            
            <CustomButton
              onClick={handleCancel}
              variant="red"
              size="lg"
            >
              {isDownloading ? 'Cancel' : 'Close'}
            </CustomButton>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-600/40">
          <div className="flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure download from Mohammad Jada
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal; 