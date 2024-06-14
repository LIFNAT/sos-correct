document.addEventListener('DOMContentLoaded', (event) => {
    // สุ่มเครื่องหมายและกำหนดโอกาสเกิด
    const symbols = ['✔️', '✖️'];
    const symbol = Math.random() < 0.2 ? symbols[0] : symbols[1];
  
    // สร้างและแสดงเครื่องหมาย
    const symbolElement = document.createElement('div');
    symbolElement.innerHTML = symbol;
    document.body.appendChild(symbolElement);
  
    // แสดงข้อความหลังจากเครื่องหมาย
    const messageElement = document.createElement('div');
    messageElement.innerHTML = 'ข้อความของคุณที่นี่';
    document.body.appendChild(messageElement);
  
    // ตั้งค่าสไตล์สำหรับเครื่องหมายและข้อความ
    symbolElement.style.fontSize = '48px';
    symbolElement.style.textAlign = 'center';
    messageElement.style.textAlign = 'center';
  });