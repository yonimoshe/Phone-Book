import { mount } from 'enzyme';
import PersonsList from './PersonsList';

describe("Phone Book Testing", () => {

  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<PersonsList />);
    console.log(wrapper.debug());
  })

  test('renders title of Phone book', () => {
    expect(wrapper.find("h2").text()).toContain("No Contacts To Display");
   });  
});
