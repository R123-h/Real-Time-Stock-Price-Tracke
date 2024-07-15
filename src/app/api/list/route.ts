import connect from "../connect";
export async function GET(request: Request) {
  const client = await connect;
  let collections = await client
    .db("FomoFactory")
    .listCollections()
    .toArray()
    return Response.json(collections?.map((x) => x?.name));

  // return Response.json([])
}
