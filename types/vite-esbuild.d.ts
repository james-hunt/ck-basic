import 'vite'

declare module 'vite' {
  interface ESBuildOptions {
    /**
     * Forwarded to esbuild to select the output language level.
     */
    target?: string | string[] | false
    /**
     * Force-enable or disable individual syntax transforms.
     */
    supported?: Record<string, boolean>
  }
}
