// test that the toastr is shown correctly (toastr function is called and the argument is the one we want)
import {libraries} from './index'

// we don't test toastr library, we just test that the function that calls the toastr is called
test('should call toastr', () => {  
    const mockedToastr = jest.fn() 
    libraries(mockedToastr)
    expect(mockedToastr).toHaveBeenCalled();
    expect(mockedToastr).toHaveBeenCalledTimes(2);
    expect(mockedToastr).toHaveReturned();
})

test('should pass to toastr the correct argument', () => { 
    const messageToTest = 'This is a success message'
    const mockedToastr = jest.fn()
    console.log(typeof mockedToastr) 
    libraries(mockedToastr, messageToTest)
    expect(mockedToastr).toHaveBeenCalledWith(messageToTest);
})
