import { NextResponse } from 'next/server';

async function POST(req) {

  const email = await req.json()

  console.log(email );

  if (!email|| !email.length) {
    return NextResponse.json({data: 'Not Allowed'},{status: 405});
  }

  try {
    const AUDIENCE_ID = process.env.AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API;
    const DATACENTER = process.env.SERVER_PREFIX;
    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://us12.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
    // const jsonn = await response.json()
    //   console.log(jsonn)
    if (response.status >= 400) {
      return NextResponse.json({ error: `There was an error subscribing to the newsletter.
      //   Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`},{status: 404})
      // return NextResponse.json(400).json({
      //   error: `There was an error subscribing to the newsletter.
      //   Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
      // });
    }
    console.log(response)

    return NextResponse.json(email);
  } catch (error) {
    console.log(error)
    return NextResponse.json({data: 'notWorking'},{status: 500})
  }
};



module.exports = {
  POST,
};
