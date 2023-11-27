import sendRequest from './send-request';
const BASE_URL = '/api/books/note';

export function addNote(bookData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', bookData)
}

export async function editNote (booksData) {
    return sendRequest(`${BASE_URL}/${booksData}/edit`, 'PUT', booksData);
}

export async function deleteNote (bookId) {
    return sendRequest(`${BASE_URL}/${bookId}`, 'PUT');
}