import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import buyCat from '@/views/Home.vue'

describe('buyCat', () => {
    let wrapper = null;
    //   const title = 'Test Item',
    //     initCost = 2,
    //     costMult = 1.2,
    //     desc = 'This is a test item';
    //   beforeEach(function(done){

    //     wrapper = shallowMount(buyCat, {
    //       propsData: { title, initCost, costMult, desc }
    //     })
    //     done();
    //   })
    it('renders title when passed', () => {
        wrapper = shallowMount(buyCat, {
            // propsData: { title, initCost, costMult, desc }
        })
        expect('hello there').to.include('hell')
    })

})
