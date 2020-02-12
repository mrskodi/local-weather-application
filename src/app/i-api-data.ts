export interface IApiData {
  weather: [
    {
      description: string,
      icon: string
    }
  ],
  main: {
    temp: number
  },
  dt: number,
  sys: {
    country: string
  },
  name: string
}
