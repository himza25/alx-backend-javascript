// 0-get_list_students.js

/**
 * Returns an array of student objects with their details
 * @returns {Object[]} Array of student objects
 */
function getListStudents() {
    return [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
}

export default getListStudents;
