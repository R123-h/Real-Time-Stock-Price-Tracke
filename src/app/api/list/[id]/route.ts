import connect from "../../connect";
export async function GET(request: Request) {
  const client = await connect;
  //   let collections = await client
  //     .db("FomoFactory")
  //.listCollections()
  // .collection(request.query.id)
  //.toArray()
  let url = new URL(request.url);
  console.log("request.url",request.url.split("/").pop());
  
  let id = request.url.split("/").pop();
  
//   console.log();
let result;
if (typeof id === 'string') {
  result = await client.db("FomoFactory").collection(id).find().sort({_id: -1}).limit(20);
} else {
  throw new Error('Invalid id type');
}
  // let reslut = await client.db("FomoFactory").collection(id).find().sort({_id :-1}).limit(20);
  const data = await result.toArray()
  return Response.json(data);


  // return Response.json([])
}

//   const cursor = await client.db("test").collection("greetings").find();
//   const greetings = await cursor.toArray()
//   return Response.json(greetings
