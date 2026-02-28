import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { HomePage } from "./HomePage"
import { beforeEach, describe, expect, test, vi } from "vitest";
import { usePaginatedHero } from "../../hooks/usePaginatedHero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteHeroProvider } from "../../context/FavoriteHeroContext";

vi.mock('../../hooks/usePaginatedHero');

const mockUsePaginatedHeo = vi.mocked(usePaginatedHero);

mockUsePaginatedHeo.mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
} as unknown as ReturnType<typeof usePaginatedHero>);


const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <FavoriteHeroProvider>
                <QueryClientProvider client={queryClient}>

                    <HomePage />
                </QueryClientProvider>
            </FavoriteHeroProvider>

        </MemoryRouter>
    );
};

describe('HomePageTest', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    })

    test('should render HomePage with default values', () => {
        renderHomePage();
        const { container } = renderHomePage();
        expect(container).toMatchSnapshot();
        // screen.debug();
    });

    test('should call usePaginatedHero with default values', () => {
        renderHomePage();
        expect(mockUsePaginatedHeo).toHaveBeenCalledWith(1, 6, 'all');
    });

    test('should call usePaginatedHero with cistom query params', () => {
        renderHomePage(['/?page=2&limit=10&category=villains']);
        expect(mockUsePaginatedHeo).toHaveBeenCalledWith(2, 10, 'villains');
    });

    test('should call usePaginatedHero with deafult page and same limit on tab click', () => {
        renderHomePage(['/?tab=favorites&page=2&limit=10']);

        // const [allTabs, favoriteTab, heroesTab, villainsTab] = screen.getAllByRole('tab');
        const [, , , villainsTab] = screen.getAllByRole('tab');

        fireEvent.click(villainsTab)
        expect(mockUsePaginatedHeo).toHaveBeenCalledWith(1, 10, 'villain');
    });
})