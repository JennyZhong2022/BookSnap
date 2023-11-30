import sendRequest from './send-request';
const BASE_URL = '/api/books';

export function addToMyBooks(bookData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', bookData)
}

export async function getMyBooksList (booksData) {
    return sendRequest(BASE_URL, booksData);
}

export async function deleteMyBooksListItem (bookId) {
    return sendRequest(`${BASE_URL}/${bookId}`, 'DELETE');
}

export async function getIds () {
    return sendRequest(`${BASE_URL}/bookIds`);
}