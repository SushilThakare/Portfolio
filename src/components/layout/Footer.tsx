export default function Footer() {
  return (
    <footer className="mt-auto pt-8 text-xs text-gray-400 dark:text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} John Doe. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
