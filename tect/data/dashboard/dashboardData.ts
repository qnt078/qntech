import type {
  recentTrans,
  productPerformanceType,
  productsCards,
} from '@/types/dashboard/index'

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
  {
    title: '09:30 am',
    subtitle: 'Payment received from John Doe of $385.90',
    textcolor: 'primary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '10:00 am',
    subtitle: 'Paid to Michael of $500',
    textcolor: 'secondary',
    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: '',
  },
  {
    title: '12:00 am',
    subtitle: 'Payment was made of $64.95 to Michael',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '09:30 am',
    subtitle: 'Payment received from John Doe of $385.90',
    textcolor: 'primary',

    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: '',
  },
  {
    title: '09:30 am',
    subtitle: 'Payment received from John Doe of $385.90',
    textcolor: 'error',
    boldtext: true,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '12:00 am',
    subtitle: 'Payment Received',
    textcolor: 'success',
    boldtext: false,
    line: false,
    link: '',
    url: '',
  },
]

/*Basic Table 1*/

/*--Products Cards--*/
import proimg1 from '@/assets/img/mi1.jpg'
import proimg2 from '@/assets/img/mi2.jpg'
import proimg3 from '@/assets/img/mi3.jpg'
import proimg4 from '@/assets/img/mi4.jpg'

export { recentTransaction }
