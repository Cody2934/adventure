//making the user
export const makeUser = (formData) => ({
    name: formData.get('name'),
    mind: 6,
    completed: {}
});

export default makeUser;