import { describe, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import App from '../App';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import HomeButton from '../components/buttons/Home-Button';
import SearchBar from '../components/SearchBar';
import TwitchRandomStreamer from '../components/Streamer-Content';
import { expect } from 'chai';

// Mock axios
vi.mock('axios');

describe('PageFooter component', () => {
  test('renders the current year in the footer', () => {
    render(<PageFooter />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`©\\s*${currentYear}`, 'i'))).to.exist;

  });

  test('renders page footer', () => {
    render(<PageFooter />);
    const footerElement = document.querySelector('footer');
    expect(footerElement).to.not.be.null;
  });

  test('renders the search input and button', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search for a Game...')).to.exist;
    expect(screen.getByText('Search')).to.exist;
  });

  test('fetches access token on mount', async () => {
    const mockTokenResponse = { data: { access_token: 'mocked_token' } };
    // Use vi.fn() to mock axios post
    axios.post.mockResolvedValue(mockTokenResponse);

    render(<TwitchRandomStreamer />);

    await waitFor(() => {
      // Vitest's way to check if the function was called with specific arguments
      expect(axios.post).toHaveBeenCalledWith(
        'https://id.twitch.tv/oauth2/token',
        null,
        {
          params: {
            client_id: expect.any(String),
            client_secret: expect.any(String),
            grant_type: 'client_credentials',
          },
        }
      );
    });
  });
  it("renders PageHeader", () => {
    render(
      <BrowserRouter>  {/* Wrap with BrowserRouter */}
        <PageHeader />
      </BrowserRouter>
    );

    // Simply check if the PageHeader component renders by checking if an element is in the document
    const headerElement = document.querySelector('header');
    expect(headerElement).to.not.be.null;
  });
  test('renders a homebutton with link', ()=> {
    render(
    <MemoryRouter>
        <HomeButton/>
    </MemoryRouter>);
    const imgElement = document.querySelector('img');
    expect(imgElement).to.not.be.null;
  })
  test('renders a button for streamers', ()=> {
    render(<TwitchRandomStreamer />);
    const btnElement = document.querySelector('button');
    expect(btnElement).to.not.be.null;
  })
  
test('renders homepage by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}> 
        <App />
      </MemoryRouter>
    );
  
    expect(screen.getByText(/home/i)).to.exist;
  });
});
