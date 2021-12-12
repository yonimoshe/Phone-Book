import { shallow  } from 'enzyme';
import AddPersonForm from './AddPersonForm';


describe("AddPersonForm component testing", () => {

    let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<AddPersonForm />);
      console.log(wrapper.debug());
    })
  
    test('AddPersonForm should contain form element', () => {
      expect(wrapper.contains(<form></form>));
     });  
   
  });
  
