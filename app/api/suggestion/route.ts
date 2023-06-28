export async function GET(request: Request) {
  const response = await fetch(
    "https://dalle-project-app.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );
  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
