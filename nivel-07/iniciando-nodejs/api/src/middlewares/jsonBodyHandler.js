export async function jsonBodyHandler(request, response) {
  // Adicionar cada chuck
  const buffers = [];

  // Coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // Concatena os chunks e converter para strings. Em seguida, converte a string pra JSON
     request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }

  // Define o header de resposta como json
  response.setHeader("Content-Type", "application/json")
}
