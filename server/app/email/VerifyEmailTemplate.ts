

const verifyEmailTemplate = function (
  email: string,
  name: string,
  phone: string,
  message: string
): any {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 5px;
        }
        .header {
          text-align: center;
          background-color: #007bff;
          color: #ffffff;
          padding: 10px 0;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          color: #007bff;
          margin-bottom: 10px;
        }
        .content p {
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Pertanyaan, Kritik dan Saran</h1>
        </div>
        <div class="content">
          <h2>Email Pengirim</h2>
          <p><strong>Email:</strong>${email}</p>
          <h2>Detail Pengirim</h2>
          <p><strong>Nama:</strong>${name}</p>
          <p><strong>Nomor Telepon:</strong>${phone}</p>
          <h2>Isi Pesan</h2>
          <p>${message}</p>
        </div>
      </div>
    </body>
    </html>`
  return {
    html
  }
}

export default verifyEmailTemplate