export class DownloadManager {
  constructor() {
    this.activeDownloads = new Map();
  }

  async downloadFile(url, filename, onProgress = () => {}) {
    const downloadId = Date.now().toString();
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
      }

      const contentLength = response.headers.get('content-length');
      const total = parseInt(contentLength, 10);
      let loaded = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        chunks.push(value);
        loaded += value.length;
        
        if (total) {
          const progress = (loaded / total) * 100;
          onProgress(progress, loaded, total);
        }
      }

      const blob = new Blob(chunks);
      
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(downloadUrl);
      
      return { success: true, downloadId };
    } catch (error) {
      console.error('Download failed:', error);
      throw error;
    }
  }

  cancelDownload(downloadId) {
    if (this.activeDownloads.has(downloadId)) {
      const controller = this.activeDownloads.get(downloadId);
      controller.abort();
      this.activeDownloads.delete(downloadId);
    }
  }

  trackDownload(filename, fileSize) {
    // eslint-disable-next-line no-undef
    if (typeof gtag !== 'undefined') {
      // eslint-disable-next-line no-undef
      gtag('event', 'file_download', {
        file_name: filename,
        file_size: fileSize,
        file_type: 'game'
      });
    }
  }
}

export const downloadManager = new DownloadManager();

export const STORAGE_CONFIG = {
  AWS_S3_BASE_URL: import.meta.env.VITE_AWS_S3_BASE_URL,
  CLOUDFRONT_BASE_URL: import.meta.env.VITE_CLOUDFRONT_BASE_URL,
  GCS_BASE_URL: import.meta.env.VITE_GCS_BASE_URL,
  AZURE_BASE_URL: import.meta.env.VITE_AZURE_BASE_URL,
};

export const GAME_FILES = {
  'roller-bawler': {
    name: "Roller Bawler",
    filename: "roller-bawler.zip",
    size: "124.1 MB",
    sizeBytes: 130100000,
    type: "Windows Game",
    url: `${STORAGE_CONFIG.AWS_S3_BASE_URL}roller-bawler.zip`,
    description: "A 3D platformer game featuring ball physics and challenging levels. Built with Unity and C#.",
    version: "1.0",
    releaseDate: "2024-01-15"
  },
  'void-strike': {
    name: "Void Strike",
    filename: "void-strike.zip",
    size: "210.9 MB",
    sizeBytes: 221200000,
    type: "Windows Game",
    url: `${STORAGE_CONFIG.AWS_S3_BASE_URL}void-strike.zip`,
    description: "A 2D space shooter game with intense action and progressive difficulty. Features smooth controls and retro-style graphics.",
    version: "1.0",
    releaseDate: "2024-01-10"
  },
  'cv': {
    name: "Mohammad Jada - CV",
    filename: "Mohammad_Jada_CV.pdf",
    size: "174.0 KB",
    sizeBytes: 178200,
    type: "PDF Document",
    url: `${STORAGE_CONFIG.AWS_S3_BASE_URL}Mohammad_Jada_CV.pdf`,
    description: "Professional CV showcasing experience in fullstack development with MERN stack, Unity game development, and project portfolio."
  }
};

export const getFileInfo = (fileKey) => {
  return GAME_FILES[fileKey] || null;
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}; 