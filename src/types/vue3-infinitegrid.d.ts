declare module '@egjs/vue3-infinitegrid' {
  import { DefineComponent } from 'vue'

  export const MasonryInfiniteGrid: DefineComponent<{
    gap?: number
    columnSize?: number
    minColumnSize?: number
    align?: string
    horizontal?: boolean
    container?: boolean
    threshold?: number
    useRecycle?: boolean
    useFit?: boolean
    useFirstRender?: boolean
    useLoading?: boolean
    useTransform?: boolean
    renderOnPropertyChange?: boolean
    preserveUIOnDestroy?: boolean
    defaultDirection?: 'start' | 'end'
  }>
}
