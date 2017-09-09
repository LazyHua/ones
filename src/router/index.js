import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import logintwo from '@/components/logintwo'
import pagination from '@/components/ccomponent/pagination'
import logins from '@/components/logins'
import Home from '@/components/Home'
import area from '@/components/areaManager/area'
import devicelist from '@/components/areaManager/devicelist'
import price from '@/components/areaManager/price'
import advert from '@/components/areaManager/advert'
import qrcode from '@/components/areaManager/qrcode'
import epdevicelist from '@/components/areaManager/epdevicelist'
import voucher from '@/components/activityManager/voucher'
import coupon from '@/components/activityManager/coupon'
import order from '@/components/accountManager/order'
import recharge from '@/components/accountManager/recharge'
import dayorder from '@/components/accountManager/dayorder'
import monthorder from '@/components/accountManager/monthorder'
import yearorder from '@/components/accountManager/yearorder'
import exporder from '@/components/accountManager/exporder'
import refundorder from '@/components/accountManager/refundorder'
import netapply from '@/components/formApply/netapply'
import finishItems from '@/components/taskProcess/finishItems'
Vue.use(Router)


export default new Router({
  routes: [
      {
        path: '/',
        //redirect:'/login',
        component: logins
      },
      {
        path: '/Home',
        name: 'Home',
        component: Home,
        children:[
        	{
          path: '/area',
  	      name: 'area',
  	      component: area
  	    },
        	{
          path: '/devicelist',
  	      name: 'devicelist',
  	      component: devicelist
  	    },{
          path: '/price',
  	      name: 'price',
  	      component: price
  	    },{
          path: '/advert',
  	      name: 'advert',
  	      component: advert
  	    },{
          path: '/qrcode',
  	      name: 'qrcode',
  	      component: qrcode
  	    },{
          path: '/epdevicelist',
  	      name: 'epdevicelist',
  	      component: epdevicelist
  	    },{
          path: '/voucher',
  	      name: 'voucher',
  	      component: voucher
  	    },{
          path: '/coupon',
  	      name: 'coupon',
  	      component: coupon
  	    },{
          path: '/netapply',
          name: 'netapply',
          component: netapply
        },{
          path: '/order',
          name: 'order',
          component: order
        },{
          path: '/recharge',
          name: 'recharge',
          component: recharge
        },{
          path: '/dayorder',
          name: 'dayorder',
          component: dayorder
        },{
          path: '/monthorder',
          name: 'monthorder',
          component: monthorder
        },{
          path: '/yearorder',
          name: 'yearorder',
          component: yearorder
        },{
          path: '/exporder',
          name: 'exporder',
          component: exporder
        },{
          path: '/refundorder',
          name: 'refundorder',
          component: refundorder
        },{
          path: '/finishItems',
          name: 'finishItems',
          component: finishItems
        }
        
  	  ]
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    }
  ]
})