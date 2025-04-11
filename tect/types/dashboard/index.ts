/*Recent Transaction*/
type recentTrans = {
  title: string
  subtitle: string
  textcolor: string
  boldtext: boolean
  line: boolean
  link: string
  url: string
}

/*product performance*/
type productPerformanceType = {
  _id: number
  totalOrders: number
  totalSales: number
  user: {
    _id: number
    name: string
    email: string
  }
}

/*Products card types*/
type productsCards = {
  _id?: string
  name: string
  price: number
  description: string
  image?: string
  category: string
}

type salesOverview = {
  _id: string
  totalSales: number
  totalPaid: number
}

export type {
  recentTrans,
  productPerformanceType,
  productsCards,
  salesOverview,
}
