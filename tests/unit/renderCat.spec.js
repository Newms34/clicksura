import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import buyCat from '@/components/buyCat.vue'

describe('Individual buyable categories', () => {
  let wrapper = null;
  const title = 'Test Item',
    initCost = 2,
    costMult = 1.2,
    desc = 'This is a test item';
  beforeEach(function(done){
    
    wrapper = shallowMount(buyCat, {
      propsData: { title, initCost, costMult, desc }
    })
    done();
  })
  it('render title when passed', () => {
    expect(wrapper.find('div').text()).to.include(title)
  })
  it('render description when passed', () => {
    expect(wrapper.find('div').text()).to.include(desc)
  })
  it('render initial cost when passed', () => {
    expect(wrapper.find('div').text()).to.include(initCost)
  })

})
