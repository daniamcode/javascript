// mock functions

const continents = (cont1, cont2, countries) => {
    console.log('this is a test')
    countries('austria')
}

const countries = jest.fn()
continents(null, null, countries)
test('basic test', () => {  
    expect(countries).toHaveBeenCalled();
    expect(countries).toHaveBeenCalledTimes(1);
    expect(countries).toHaveBeenCalledWith('austria');
    expect(countries).toHaveReturned();
})

// mock functions importing module
import {module1} from './module1'

test('should call function in module', () => {  
    const mockedFunction = jest.fn() 
    module1(mockedFunction)
    expect(mockedFunction).toHaveBeenCalled();
    expect(mockedFunction).toHaveBeenCalledTimes(4);
    expect(mockedFunction).toHaveBeenCalledWith('qqq');
    expect(mockedFunction).toHaveReturned();
})