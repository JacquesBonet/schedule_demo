const URL_BASE = process.env.NEXT_PUBLIC_APP_BASE_API

export const getUrl = ( resource:string) => (
  `${URL_BASE}/${resource}`
)
