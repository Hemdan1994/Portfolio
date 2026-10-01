/// <reference types="vite/client" />

declare module '*.pdf' {
  const src: string
  export default src
}

declare module '*&as=picture' {
  const picture: {
    sources: Record<string, string>
    img: { src: string; w: number; h: number }
  }
  export default picture
}
