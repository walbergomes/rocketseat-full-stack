export function update({ request, response, database }) {
  const { id } = request.params
  const { equipament, description } = request.body


  database.update("tickets", id, {
    equipament,
    description,
    update_at: new Date()
  })

  return response.end()
}