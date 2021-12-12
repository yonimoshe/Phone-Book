import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';
import AddPersonForm from './components/AddPersonForm';

describe("Phone Book Testing", () => {

  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<App />);
    console.log(wrapper.debug());
  })

  test('renders title of Phone book', () => {
    expect(wrapper.find("h1").text()).toContain("Phone Book App");
   });  
});

