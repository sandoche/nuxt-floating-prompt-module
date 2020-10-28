import FloatingPrompt from 'producthunt-floating-prompt';

export default async function ({ router, store }) {
  const moduleOptions = <%= serialize(options) %>;

  if (process.client && moduleOptions) {
    const addFloatingPrompt = () => {
      FloatingPrompt(moduleOptions);
    };
    window.addEventListener("load", addFloatingPrompt);
  }
}
