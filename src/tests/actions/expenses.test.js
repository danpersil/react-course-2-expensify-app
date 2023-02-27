import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// test (, ()=> {})

//toBe - fixed values, bools, etc
//toEqual - to compare object and arrays
//any - pass a contructor to avoid expect values 

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New note value' }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData =
    {
        description: 'Rent',
        note: 'This was last months rent',
        amount: 109500,
        createdAt: 1000
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData, 
            //-add a way to ignore this variable which can be dynamic
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const defaultExpense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpense,
            id: expect.any(String)
        }
    });
});