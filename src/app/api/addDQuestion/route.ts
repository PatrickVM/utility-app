// set db config up
//  - choose db
//  - set up db

export async function POST(req: Request) {
  const body = await req.json;
  // TODO: what should the data structure look like?
  //  1. Question
  // 2. Date Submitted
  // TODO: BONUS:
  // - submitter
  // - fav d-character
  const { question } = body;
}
