import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import './BookSearchForm.css';

const categories = [
  'Art',
  'Biography',
  'Computers',
  'Fiction',
  'History',
  'Medical',
  'Poetry',
];

const languages = [
  'English',
  'Korean',
  'French',
  'Italian',
  'Spanish',
  'German',
];

const BookSearchForm = ({
  setStartIndex,
  query,
  setQuery,
  fetchData,
  selectedSearchType,
  setSelectedSearchType,
  setCurrentPage,
  category,
  setCategory,
  language,
  setLanguage,
}) => {
  const _handleTitleChange = event => {
    setQuery(event.target.value);
  };

  const _handleSearchTypeChange = event => {
    setSelectedSearchType(event.target.value);
  };

  const _handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const _handleLanguageChange = event => {
    setLanguage(event.target.value);
    console.log('Selected Language:', event.target.value); // Debugging
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchData(query, selectedSearchType, category, language);
    setStartIndex(0);
    setCurrentPage(1);
  };

  const buttonStyles = {
    backgroundColor: '#113946',
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bolder',
    minWidth: '1em',
    minHeight: '55px',
  };

  return (
    <div className="BookSearchForm">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            columns: '10',
            padding: '1rem',
            borderRadius: '1%',
          }}
        >
          <div className="search-type-container">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedSearchType}
                label=""
                onChange={_handleSearchTypeChange}
                sx={{
                  '& fieldset': {
                    borderColor: '#000', 
                    borderWidth: '2px', 
                  },
                  '& label': {
                    color: '#000',}
                }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="author">Author</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '38ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="search-field">
              <TextField
                id="outlined-search"
                label="Search..."
                type="search"
                sx={{
                  '& fieldset': {
                    borderColor: '#000', 
                    borderWidth: '2px', 
                  },
                  '& label': {
                    color: '#000',}
                  }}
                value={query}
                onChange={_handleTitleChange}
                placeholder={`Search by ${
                  selectedSearchType === 'title' ? 'Title' : 'Author'
                }`}
              />
            </div>
          </Box>
          <div className="submit-button">
            <Button
              variant="contained"
              style={buttonStyles}
              type="submit"
              startIcon={<SearchIcon />}
            />
          </div>
          
          <div className="categories-container">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={{ color: 'black' }}>Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Categories"
                onChange={_handleCategoryChange}
                sx={{
                  '& fieldset': {
                    borderColor: '#000', 
                    borderWidth: '2px', 
                  },
                  '& label': {
                    color: '#000',}
                }}
              >
                <MenuItem value="">
                  <em>Categories</em>
                </MenuItem>
                <MenuItem value={categories[0]}>Art</MenuItem>
                <MenuItem value={categories[1]}>Biography</MenuItem>
                <MenuItem value={categories[2]}>Computers</MenuItem>
                <MenuItem value={categories[3]}>Fiction</MenuItem>
                <MenuItem value={categories[4]}>History</MenuItem>
                <MenuItem value={categories[5]}>Medical</MenuItem>
                <MenuItem value={categories[6]}>Poetry</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="languages-container">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={{ color: 'black' }}>Languages</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Languages"
                onChange={_handleLanguageChange}
                sx={{
                  '& fieldset': {
                    borderColor: '#000', 
                    borderWidth: '2px', 
                  },
                  '& label': {
                    color: '#000',}
                }}
              >
                <MenuItem value="">
                  <em>Languages</em>
                </MenuItem>
                <MenuItem value={languages[0]}>English</MenuItem>
                <MenuItem value={languages[1]}>Korean</MenuItem>
                <MenuItem value={languages[2]}>French</MenuItem>
                <MenuItem value={languages[3]}>Italian</MenuItem>
                <MenuItem value={languages[4]}>Spanish</MenuItem>
                <MenuItem value={languages[1]}>Chinese</MenuItem>
                <MenuItem value={languages[1]}>German</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookSearchForm;
