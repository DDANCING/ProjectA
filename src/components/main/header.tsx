import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';
import { ThemeProvider } from '../ui/theme-provider';
import { getToken } from '@/hooks/useSession';
import { deleteSessionCookie } from '@/lib/CookieSession';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const token = getToken();

    const handleLogout = () => {
        deleteSessionCookie();
    };

    return (
        <div className="px-6 py-3 flex items-center justify-between border-b border-primary bg-background text-muted-foreground">
            <h1 className="text-xl font-bold"></h1>
            <div className="flex items-center gap-3">
                {token ? (
                    <div className="flex items-center gap-3">
                        <Button onClick={handleLogout} variant={'outline'}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="text-muted-foreground">
                            <Button variant={'outline'}>Login</Button>
                        </Link>
                        <Link to="/create" className="text-muted-foreground">
                            <Button variant={'outline'}>Criar conta</Button>
                        </Link>
                    </div>
                )}

                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <ModeToggle />
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
