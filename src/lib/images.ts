/**
 * Centralized image utility functions for handling both local and external images
 * This provides a consistent interface for image paths across the application
 */

/**
 * Get the correct URL for an image path
 * - External URLs (http://, https://) are returned as-is
 * - Local paths are prefixed with BASE_URL for proper deployment
 * 
 * @param path - Image path (local or external URL)
 * @returns Resolved image URL
 * 
 * @example
 * getImageUrl('/images/hero.jpg') // => '/your-repo/images/hero.jpg' (on GitHub Pages)
 * getImageUrl('https://example.com/image.jpg') // => 'https://example.com/image.jpg'
 */
export function getImageUrl(path: string): string {
  // Return external URLs as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For local paths, prepend BASE_URL and remove leading slash if present
  const cleanPath = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}

/**
 * Get a project-specific image path
 * Convenience function for accessing project images with consistent structure
 * 
 * @param projectId - The project identifier
 * @param imageName - The image filename (with extension)
 * @returns Resolved image URL
 * 
 * @example
 * getProjectImage('rubiks-cube-robot', 'hero.jpg')
 * // => '/your-repo/images/projects/rubiks-cube-robot/hero.jpg'
 */
export function getProjectImage(projectId: string, imageName: string): string {
  return getImageUrl(`images/projects/${projectId}/${imageName}`);
}

/**
 * Get a profile image path
 * Convenience function for accessing profile images
 * 
 * @param imageName - The image filename (with extension)
 * @returns Resolved image URL
 * 
 * @example
 * getProfileImage('avatar.jpg') // => '/your-repo/images/profile/avatar.jpg'
 */
export function getProfileImage(imageName: string): string {
  return getImageUrl(`images/profile/${imageName}`);
}

/**
 * Process markdown content and replace image paths with proper URLs
 * Handles both ![alt](path) and <img src="path" /> syntax
 * 
 * @param markdown - Markdown content with image references
 * @returns Processed markdown with resolved image URLs
 */
export function processMarkdownImages(markdown: string): string {
  // Replace markdown image syntax: ![alt](path)
  let processed = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (match, alt, path) => {
      return `![${alt}](${getImageUrl(path)})`;
    }
  );
  
  // Replace HTML img tags: <img src="path" />
  processed = processed.replace(
    /<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi,
    (match, before, src, after) => {
      return `<img ${before}src="${getImageUrl(src)}"${after}>`;
    }
  );
  
  return processed;
}
