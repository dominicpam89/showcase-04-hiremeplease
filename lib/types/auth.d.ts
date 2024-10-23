/**
 * @type {"register" | "login"} AuthResult
 * @description Type definition for the result of authentication actions.
 * This type defines the possible outcomes or types of authentication.
 *
 * @example
 * // app/(auth)/auth/[...result]/page.tsx
 *
 * import { useSearchParams } from 'next/navigation';
 * import { AuthComponent } from './AuthComponent';
 *
 * const AuthPage = () => {
 *   // Using the searchParams hook to retrieve the authentication result
 *   const searchParams = useSearchParams();
 *   const result = searchParams.get('result') as AuthResult; // 'register' or 'login'
 *
 *   // Pass the result to the AuthComponent to handle the logic
 *   return <AuthResultComponent result={result} />;
 * };
 *
 * export default AuthPage;
 */
declare type AuthResultType = "register" | "login";

declare type AuthResult = "success" | "fail";

declare interface MockUser {
	uid: string;
	email: string;
	password: string;
	emailVerified: boolean;
}
