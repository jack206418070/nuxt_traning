export const state = () => ({
  productData: [
    {
      name: '有機豆腐',
      unit: '200g/盒',
      price: 60,
      favor: true
    },
    {
      name: '有機豆腐2',
      unit: '200g/盒',
      price: 80,
      favor: false
    },
    {
      name: '有機豆腐3',
      unit: '200g/盒',
      price: 100,
      favor: true
    },
    {
      name: '有機豆腐4',
      unit: '200g/盒',
      price: 120,
      favor: false
    },
    {
      name: '有機豆腐5',
      unit: '200g/盒',
      price: 160,
      favor: true
    },
    {
      name: '有機豆腐6',
      unit: '200g/盒',
      price: 260,
      favor: false
    }
  ]
})
// getter 可以做資料處理
export const getters = {
  get_FavorProduct: state => {
    let tempArr = state.productData.filter(item => item.favor === true)
    return tempArr
  }
}

export const mutations = {
}

export const actions = {

}