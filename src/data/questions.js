export const questions = [
  // ==========================================
  // CHỦ ĐỀ 1: DỊCH CHUYỂN ĐỒ THỊ HÀM SỐ (20 Câu)
  // Phân bổ: 7 Dễ, 7 Khó, 6 Tư duy
  // ==========================================
  
  // --- 7 CÂU DỄ ---
  {
    id: 1,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Cho hàm số y = f(x). Để thu được đồ thị hàm số y = f(x) + 3, ta cần dịch chuyển đồ thị y = f(x) theo hướng nào?',
    options: [
      'Dịch sang trái 3 đơn vị',
      'Dịch sang phải 3 đơn vị',
      'Dịch lên trên 3 đơn vị',
      'Dịch xuống dưới 3 đơn vị'
    ],
    correctAnswer: 2,
    explanation: 'Cộng thêm một hằng số dương (3) vào bên ngoài hàm số sẽ làm đồ thị dịch chuyển lên trên tương ứng 3 đơn vị dọc theo trục Oy.'
  },
  {
    id: 2,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Đồ thị hàm số y = f(x - 2) được tạo ra từ đồ thị y = f(x) bằng phép biến đổi nào?',
    options: [
      'Dịch sang trái 2 đơn vị',
      'Dịch sang phải 2 đơn vị',
      'Dịch lên trên 2 đơn vị',
      'Dịch xuống dưới 2 đơn vị'
    ],
    correctAnswer: 1,
    explanation: 'Việc trừ đi một số dương (2) ở biến số x bên trong hàm sẽ làm đồ thị dịch chuyển sang phải 2 đơn vị dọc theo trục Ox.'
  },
  {
    id: 3,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Nếu dịch chuyển đồ thị hàm số y = x² sang trái 4 đơn vị, ta được hàm số nào sau đây?',
    options: [
      'y = x² - 4',
      'y = (x - 4)²',
      'y = x² + 4',
      'y = (x + 4)²'
    ],
    correctAnswer: 3,
    explanation: 'Dịch sang trái 4 đơn vị có nghĩa là thay thế biến x bằng (x + 4). Do đó hàm số mới là y = (x + 4)².'
  },
  {
    id: 4,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Cho hàm số y = |x|. Đồ thị hàm số y = |x| - 5 là kết quả của phép tịnh tiến đồ thị ban đầu:',
    options: [
      'Lên trên 5 đơn vị',
      'Sang trái 5 đơn vị',
      'Xuống dưới 5 đơn vị',
      'Sang phải 5 đơn vị'
    ],
    correctAnswer: 2,
    explanation: 'Trừ đi 5 ở bên ngoài hàm số làm đồ thị dịch chuyển xuống dưới 5 đơn vị dọc theo trục Oy.'
  },
  {
    id: 5,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Đồ thị y = f(x) được biến đổi thành y = -f(x). Đây là phép biến đổi gì?',
    options: [
      'Đối xứng qua trục hoành (Ox)',
      'Đối xứng qua trục tung (Oy)',
      'Dịch xuống dưới',
      'Đối xứng qua gốc toạ độ'
    ],
    correctAnswer: 0,
    explanation: 'Nhân toàn bộ hàm số với -1 (bên ngoài) sẽ làm lật đồ thị đối xứng qua trục hoành (Ox).'
  },
  {
    id: 6,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Đồ thị y = f(-x) được tạo ra bằng cách nào từ đồ thị gốc y = f(x)?',
    options: [
      'Dịch sang trái',
      'Đối xứng qua trục hoành (Ox)',
      'Đối xứng qua trục tung (Oy)',
      'Dịch xuống dưới'
    ],
    correctAnswer: 2,
    explanation: 'Thay x bằng -x bên trong hàm số sẽ tạo ra đồ thị đối xứng với đồ thị ban đầu qua trục tung (Oy).'
  },
  {
    id: 7,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Dễ',
    question: 'Cho hàm số y = 2f(x). Đồ thị của hàm số này so với y = f(x) sẽ như thế nào?',
    options: [
      'Dãn theo phương trục hoành gấp 2 lần',
      'Dãn theo phương trục tung gấp 2 lần',
      'Co theo phương trục hoành đi 2 lần',
      'Co theo phương trục tung đi 2 lần'
    ],
    correctAnswer: 1,
    explanation: 'Nhân một số a > 1 (ở đây a=2) bên ngoài hàm số sẽ làm đồ thị dãn ra theo phương thẳng đứng (trục tung) gấp 2 lần.'
  },

  // --- 7 CÂU KHÓ ---
  {
    id: 8,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Để biến đồ thị y = sin(x) thành y = 3sin(2x - π/2) + 1, ta cần thực hiện chuỗi phép biến đổi nào (theo thứ tự đúng)?',
    options: [
      'Dịch sang phải π/2, co trục hoành 1/2, dãn trục tung 3, dịch lên trên 1',
      'Dịch sang phải π/4, co trục hoành 1/2, dãn trục tung 3, dịch lên trên 1',
      'Dịch sang trái π/4, dãn trục hoành 2, dãn trục tung 3, dịch lên trên 1',
      'Dịch sang phải π/2, dãn trục hoành 2, co trục tung 1/3, dịch xuống dưới 1'
    ],
    correctAnswer: 1,
    explanation: 'Viết lại: y = 3sin[2(x - π/4)] + 1. Thứ tự: Dịch phải π/4 -> Co trục hoành tỉ lệ 1/2 (thành 2x) -> Dãn trục tung tỉ lệ 3 -> Dịch lên 1.'
  },
  {
    id: 9,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Cho đồ thị hàm số y = f(x) đi qua điểm A(2, 5). Điểm tương ứng trên đồ thị hàm số y = 2f(3x - 1) - 4 sẽ có toạ độ là?',
    options: [
      '(1, 6)',
      '(1, 1)',
      '(3, 6)',
      '(7, 1)'
    ],
    correctAnswer: 0,
    explanation: 'Ta cần 3x - 1 = 2 => x = 1. Khi x = 1, y = 2f(2) - 4 = 2(5) - 4 = 6. Vậy điểm tương ứng là (1, 6).'
  },
  {
    id: 10,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Hàm số y = f(x) có tập xác định là [-2, 4]. Tập xác định của hàm số y = f(-2x + 1) là?',
    options: [
      '[-3/2, 3/2]',
      '[-7, 5]',
      '[-2, 4]',
      '[-1, 2]'
    ],
    correctAnswer: 0,
    explanation: 'Ta cần -2 <= -2x + 1 <= 4 <=> -3 <= -2x <= 3 <=> -3/2 <= x <= 3/2. Tập xác định là [-3/2, 3/2].'
  },
  {
    id: 11,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Nếu đồ thị hàm số y = e^x được phản xạ qua trục Oy, sau đó dịch sang phải 2 đơn vị, hàm số thu được là?',
    options: [
      'y = e^(-x + 2)',
      'y = e^(-x - 2)',
      'y = -e^(x - 2)',
      'y = e^(x + 2)'
    ],
    correctAnswer: 0,
    explanation: 'Phản xạ qua Oy: thay x bằng -x ta được y = e^(-x). Dịch phải 2 đơn vị: thay x bằng (x - 2) ta được y = e^[-(x - 2)] = e^(-x + 2).'
  },
  {
    id: 12,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Đồ thị hàm số y = 1/x được tịnh tiến song song với trục tung lên trên 2 đơn vị, rồi song song với trục hoành sang trái 3 đơn vị. Tiệm cận ngang và tiệm cận đứng của đồ thị mới là?',
    options: [
      'y = 2, x = 3',
      'y = -2, x = -3',
      'y = 2, x = -3',
      'y = 3, x = -2'
    ],
    correctAnswer: 2,
    explanation: 'Hàm số mới: y = 1/(x + 3) + 2. Mẫu số = 0 => x = -3 (Tiệm cận đứng). Bậc tử < mẫu nên phần phân số tiến tới 0, y = 2 (Tiệm cận ngang).'
  },
  {
    id: 13,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Tập giá trị của hàm số y = f(x) là [-3, 5]. Tập giá trị của y = 4 - 2f(x + 1) là?',
    options: [
      '[-10, 6]',
      '[-6, 10]',
      '[-14, -2]',
      '[2, 10]'
    ],
    correctAnswer: 1,
    explanation: 'Ta có -3 <= f(x+1) <= 5. Nhân với -2: -10 <= -2f(x+1) <= 6. Cộng thêm 4: -6 <= 4 - 2f(x+1) <= 10. Tập giá trị mới là [-6, 10].'
  },
  {
    id: 14,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Khó',
    question: 'Đồ thị y = ln(x) được biến đổi thành y = ln(2x - 4). Phép biến đổi nào dưới đây mô tả đúng nhất (tính từ hàm gốc)?',
    options: [
      'Dịch phải 4 đơn vị, co trục hoành 2 lần',
      'Dịch phải 2 đơn vị, co trục hoành 2 lần',
      'Dịch trái 2 đơn vị, dãn trục hoành 2 lần',
      'Co trục hoành 2 lần, dịch trái 4 đơn vị'
    ],
    correctAnswer: 1,
    explanation: 'y = ln[2(x - 2)]. Phép dời hình là thay x bởi (x - 2) (dịch phải 2), sau đó thay x bởi 2x (co trục hoành đi 2 lần). Cách khác: co hoành 2 lần (thành ln(2x)), rồi dịch phải 2 (thành ln(2(x-2))).'
  },

  // --- 6 CÂU TƯ DUY ---
  {
    id: 15,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Tư duy',
    question: 'Hàm số y = f(x) là hàm chẵn. Hỏi hàm số g(x) = f(x - 3) có tính chất gì đặc biệt?',
    options: [
      'Là hàm chẵn',
      'Là hàm lẻ',
      'Đối xứng qua đường thẳng x = 3',
      'Đối xứng qua điểm (3, 0)'
    ],
    correctAnswer: 2,
    explanation: 'Hàm chẵn y = f(x) đối xứng qua trục tung (x = 0). Khi dịch sang phải 3 đơn vị thành f(x - 3), trục đối xứng cũng dịch sang phải thành đường thẳng x = 3.'
  },
  {
    id: 16,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Tư duy',
    question: 'Cho hàm số y = f(x) liên tục và có một điểm cực trị duy nhất tại (2, 4). Phép biến đổi nào sau đây làm cho điểm cực trị của hàm số mới nằm trên trục tung?',
    options: [
      'y = f(x + 2)',
      'y = f(x) - 4',
      'y = f(x - 2)',
      'y = -f(x)'
    ],
    correctAnswer: 0,
    explanation: 'Để điểm cực trị nằm trên trục tung (tức là x = 0), ta cần dịch đồ thị sang trái 2 đơn vị. Phép biến đổi đó là y = f(x + 2).'
  },
  {
    id: 17,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Tư duy',
    question: 'Giả sử y = P(x) là một đa thức bậc 3. Nếu tịnh tiến đồ thị y = P(x) sao cho gốc toạ độ O(0,0) trở thành tâm đối xứng của đồ thị, hàm số mới sẽ có dạng như thế nào?',
    options: [
      'Chỉ chứa các số hạng bậc chẵn',
      'Chỉ chứa các số hạng bậc lẻ',
      'Có hệ số tự do bằng 0 nhưng vẫn có bậc chẵn',
      'Là một hằng số'
    ],
    correctAnswer: 1,
    explanation: 'Hàm số nhận gốc toạ độ làm tâm đối xứng là hàm số lẻ. Một đa thức là hàm số lẻ khi và chỉ khi nó chỉ chứa các luỹ thừa bậc lẻ của x (x³, x).'
  },
  {
    id: 18,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Tư duy',
    question: 'Cho phương trình f(|x|) = m. Biết đồ thị y = f(x) chỉ có đúng 1 điểm cực trị nằm ở x > 0. Có tối đa bao nhiêu giá trị của m để phương trình trên có 4 nghiệm phân biệt?',
    options: [
      'Không có',
      '1',
      'Vô số',
      '2'
    ],
    correctAnswer: 2,
    explanation: 'Đồ thị y = f(|x|) được tạo ra bằng cách giữ phần đồ thị y = f(x) bên phải trục tung (x>0), sau đó lấy đối xứng phần đó qua trục tung. Nhờ cực trị dương này tạo thành hình dáng chữ W hoặc M, sẽ có một khoảng vô số giá trị của m cắt đồ thị tại 4 điểm.'
  },
  {
    id: 19,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Tư duy',
    question: 'Biết f(x) có đồ thị (C). Gọi (C\') là đồ thị thu được khi lấy đối xứng (C) qua gốc toạ độ. Biểu thức của (C\') là?',
    options: [
      'y = f(-x)',
      'y = -f(x)',
      'y = -f(-x)',
      'y = |f(x)|'
    ],
    correctAnswer: 2,
    explanation: 'Đối xứng qua gốc toạ độ là kết hợp của việc đối xứng qua trục tung (thay x bằng -x) và đối xứng qua trục hoành (nhân toàn bộ hàm với -1). Vậy ta được y = -f(-x).'
  },
  {
    id: 20,
    topic: 'Dịch Chuyển Đồ Thị Hàm Số',
    difficulty: 'Tư duy',
    question: 'Cho đồ thị y = |f(x)| có đúng 5 điểm cực trị. Khẳng định nào sau đây có thể đúng về đồ thị y = f(x)?',
    options: [
      'y = f(x) cắt trục hoành tại 2 điểm và có 2 điểm cực trị',
      'y = f(x) cắt trục hoành tại 3 điểm và có 2 điểm cực trị',
      'y = f(x) cắt trục hoành tại 1 điểm và có 4 điểm cực trị',
      'y = f(x) không cắt trục hoành và có 5 điểm cực trị'
    ],
    correctAnswer: 1,
    explanation: 'Số điểm cực trị của y = |f(x)| bằng (số điểm cực trị của f(x)) + (số giao điểm không phải tiếp điểm của f(x) với Ox). Vậy 2 + 3 = 5 là một trường hợp hợp lý.'
  },

  // ==========================================
  // CHỦ ĐỀ 2: GIỚI HẠN HAI PHÍA VÀ SỰ TỒN TẠI (20 Câu)
  // Phân bổ: 7 Dễ, 7 Khó, 6 Tư duy
  // ==========================================
  
  // --- 7 CÂU DỄ ---
  {
    id: 21,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Điều kiện cần và đủ để giới hạn của hàm số f(x) tồn tại khi x tiến tới x_0 là gì?',
    options: [
      'f(x_0) phải xác định',
      'Giới hạn trái và giới hạn phải tại x_0 phải tồn tại và bằng nhau',
      'Hàm số phải liên tục tại x_0',
      'Đạo hàm của hàm số phải tồn tại tại x_0'
    ],
    correctAnswer: 1,
    explanation: 'Theo định nghĩa, lim_{x->x_0} f(x) = L khi và chỉ khi lim_{x->x_0^-} f(x) = lim_{x->x_0^+} f(x) = L.'
  },
  {
    id: 22,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Tính giới hạn phải: lim_{x->0^+} (1/x)?',
    options: [
      '0',
      '1',
      '+∞',
      '-∞'
    ],
    correctAnswer: 2,
    explanation: 'Khi x tiến về 0 từ bên phải (x > 0), thì x là một số dương rất nhỏ. Khi đó 1/x sẽ là một số dương rất lớn, tiến tới +∞.'
  },
  {
    id: 23,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Cho hàm f(x) = x + 1 nếu x > 0 và f(x) = 2 nếu x <= 0. Tính lim_{x->0^+} f(x).',
    options: [
      '0',
      '1',
      '2',
      'Không tồn tại'
    ],
    correctAnswer: 1,
    explanation: 'Khi x tiến về 0 từ bên phải (x > 0), ta sử dụng nhánh f(x) = x + 1. Thay x = 0 vào ta được 0 + 1 = 1.'
  },
  {
    id: 24,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Cho hàm số f(x) = |x|/x. Tính lim_{x->0^-} f(x).',
    options: [
      '1',
      '-1',
      '0',
      'Không tồn tại'
    ],
    correctAnswer: 1,
    explanation: 'Khi x < 0 (tiến về 0 từ bên trái), |x| = -x. Do đó f(x) = (-x)/x = -1. Vậy giới hạn trái là -1.'
  },
  {
    id: 25,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Khẳng định nào sau đây là SAI về giới hạn?',
    options: [
      'Giới hạn của một hằng số bằng chính nó.',
      'Nếu giới hạn trái khác giới hạn phải thì giới hạn không tồn tại.',
      'Hàm số luôn có giới hạn tại những điểm mà nó xác định.',
      'Giới hạn của tổng hai hàm bằng tổng các giới hạn (nếu chúng tồn tại hữu hạn).'
    ],
    correctAnswer: 2,
    explanation: 'Hàm số có thể xác định tại x_0 nhưng giới hạn trái và phải khác nhau (nhảy bậc), khi đó giới hạn không tồn tại. Nên khẳng định "luôn có giới hạn" là sai.'
  },
  {
    id: 26,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Kí hiệu giới hạn bên trái của hàm f(x) khi x tiến đến c là gì?',
    options: [
      'lim_{x->c} f(x)',
      'lim_{x->c^+} f(x)',
      'lim_{x->c^-} f(x)',
      'lim_{x->-c} f(x)'
    ],
    correctAnswer: 2,
    explanation: 'Dấu trừ (-) trên số c biểu thị cho việc tiến về c từ phía các giá trị nhỏ hơn c (từ bên trái).'
  },
  {
    id: 27,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Dễ',
    question: 'Tính lim_{x->2^-} (x + 3)?',
    options: [
      '2',
      '3',
      '5',
      'Không tồn tại'
    ],
    correctAnswer: 2,
    explanation: 'Hàm số đa thức liên tục tại mọi điểm. Do đó giới hạn một phía hay hai phía tại x = 2 đều bằng giá trị hàm số tại x=2: 2 + 3 = 5.'
  },

  // --- 7 CÂU KHÓ ---
  {
    id: 28,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Tìm a để hàm số f(x) = { (x² - 4)/(x - 2) với x > 2; ax + 1 với x <= 2 } có giới hạn khi x tiến tới 2.',
    options: [
      'a = 1',
      'a = 2',
      'a = 3/2',
      'a = 4'
    ],
    correctAnswer: 2,
    explanation: 'Lim phải x->2^+: (x-2)(x+2)/(x-2) = x + 2 = 4. Lim trái x->2^-: a(2) + 1 = 2a + 1. Để giới hạn tồn tại: 2a + 1 = 4 => a = 3/2.'
  },
  {
    id: 29,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Tính giới hạn: lim_{x->1^-} (x - 1) / |x^3 - 1|.',
    options: [
      '1/3',
      '-1/3',
      '+∞',
      '-∞'
    ],
    correctAnswer: 1,
    explanation: 'Khi x->1^-, x < 1 nên x^3 - 1 < 0 => |x^3 - 1| = -(x^3 - 1) = -(x-1)(x^2+x+1). Biểu thức thành: (x-1)/[-(x-1)(x^2+x+1)] = -1/(x^2+x+1). Thế x=1 được -1/3.'
  },
  {
    id: 30,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Cho f(x) = e^(1/x). Tính lim_{x->0^-} f(x) và lim_{x->0^+} f(x).',
    options: [
      '0 và +∞',
      '+∞ và 0',
      '1 và +∞',
      'Không tồn tại và 0'
    ],
    correctAnswer: 0,
    explanation: 'Khi x->0^-, 1/x -> -∞, nên e^(1/x) -> e^(-∞) = 0. Khi x->0^+, 1/x -> +∞, nên e^(1/x) -> e^(+∞) = +∞.'
  },
  {
    id: 31,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Biết lim_{x->c} f(x) = 5 và lim_{x->c} g(x) = -2. Tính lim_{x->c} [f(x) - 2g(x)] / [f(x) + g(x)].',
    options: [
      '9/3 = 3',
      '3',
      '1/3',
      '1'
    ],
    correctAnswer: 1,
    explanation: 'Áp dụng các định lý giới hạn (do các giới hạn đều hữu hạn và mẫu khác 0): [5 - 2(-2)] / [5 + (-2)] = (5 + 4) / 3 = 9 / 3 = 3.'
  },
  {
    id: 32,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Xét hàm số f(x) = sin(1/x) * x. Tìm lim_{x->0} f(x).',
    options: [
      '1',
      '0',
      '+∞',
      'Không tồn tại'
    ],
    correctAnswer: 1,
    explanation: 'Sử dụng nguyên lý kẹp (Squeeze theorem): -1 <= sin(1/x) <= 1, nên -|x| <= x*sin(1/x) <= |x|. Do lim_{x->0} -|x| = 0 và lim_{x->0} |x| = 0, suy ra lim_{x->0} f(x) = 0.'
  },
  {
    id: 33,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Tính lim_{x->0^+} (1/x - 1/x^2).',
    options: [
      '0',
      '+∞',
      '-∞',
      '1'
    ],
    correctAnswer: 2,
    explanation: 'Biến đổi: (x - 1)/x^2. Khi x->0^+, tử số tiến về -1, mẫu số là x^2 luôn dương và tiến về 0. Do đó giới hạn là -∞.'
  },
  {
    id: 34,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Khó',
    question: 'Tìm lim_{x->3^-} sqrt(9 - x^2).',
    options: [
      '0',
      '3',
      '+∞',
      'Không tồn tại'
    ],
    correctAnswer: 0,
    explanation: 'Khi x->3^-, x < 3 nên x^2 < 9, do đó 9 - x^2 > 0 (trong miền xác định). Thay x=3 vào giới hạn ta được sqrt(9 - 9) = 0.'
  },

  // --- 6 CÂU TƯ DUY ---
  {
    id: 35,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Tư duy',
    question: 'Hàm số Dirichlet D(x) = { 1 nếu x là số hữu tỉ; 0 nếu x là số vô tỉ }. Giới hạn của D(x) khi x tiến tới 0 là?',
    options: [
      '1',
      '0',
      '0.5',
      'Không tồn tại'
    ],
    correctAnswer: 3,
    explanation: 'Dù tiến tới 0 từ bất kỳ phía nào, giữa hai số hữu tỉ bất kỳ luôn có vô số số vô tỉ và ngược lại. Giá trị hàm số dao động liên tục giữa 0 và 1, do đó không hội tụ về một giá trị duy nhất.'
  },
  {
    id: 36,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Tư duy',
    question: 'Cho hàm số f(x) thoả mãn x^2 <= f(x) <= x^2 cos(1/x) cho mọi x khác 0. Khẳng định nào sau đây ĐÚNG?',
    options: [
      'lim_{x->0} f(x) = 0',
      'lim_{x->0} f(x) = 1',
      'Giới hạn không tồn tại do cos(1/x) dao động.',
      'Chưa đủ dữ kiện để tính giới hạn.'
    ],
    correctAnswer: 0,
    explanation: 'Theo định lý kẹp, ta có lim_{x->0} x^2 = 0. Hàm cos(1/x) bị chặn trong [-1, 1] nên x^2 cos(1/x) cũng tiến về 0 khi x->0. Vì vậy f(x) kẹp giữa 0 và 0, nên lim f(x) = 0.'
  },
  {
    id: 37,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Tư duy',
    question: 'Xét hàm f(x) = [x] (phần nguyên của x, số nguyên lớn nhất không vượt quá x). Tính L = lim_{x->2^-} [x] và R = lim_{x->2^+} [x].',
    options: [
      'L = 2, R = 2',
      'L = 1, R = 2',
      'L = 2, R = 1',
      'L = 1, R = 1'
    ],
    correctAnswer: 1,
    explanation: 'Khi x->2^- (ví dụ x=1.99), phần nguyên [x] = 1. Khi x->2^+ (ví dụ x=2.01), phần nguyên [x] = 2. Do đó L = 1 và R = 2.'
  },
  {
    id: 38,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Tư duy',
    question: 'Cho đồ thị f(x) có đường tiệm cận đứng x = a. Điều nào sau đây CHẮC CHẮN ĐÚNG về giới hạn tại a?',
    options: [
      'lim_{x->a} f(x) = +∞',
      'lim_{x->a} f(x) = -∞',
      'Ít nhất một trong hai giới hạn một phía (trái hoặc phải) tại a bằng +∞ hoặc -∞.',
      'Cả giới hạn trái và phải tại a đều tiến ra vô cực.'
    ],
    correctAnswer: 2,
    explanation: 'Theo định nghĩa tiệm cận đứng, chỉ cần ít nhất MỘT giới hạn (trái hoặc phải) tiến ra vô cực (+∞ hoặc -∞) là đủ. Không bắt buộc cả hai phía đều tiến ra vô cực.'
  },
  {
    id: 39,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Tư duy',
    question: 'Giả sử lim_{x->a} [f(x) + g(x)] tồn tại. Khẳng định nào sau đây luôn đúng?',
    options: [
      'lim_{x->a} f(x) và lim_{x->a} g(x) đều phải tồn tại.',
      'Nếu lim_{x->a} f(x) không tồn tại, thì lim_{x->a} g(x) cũng không tồn tại.',
      'Hàm số f(x) và g(x) phải liên tục tại a.',
      'lim_{x->a} f(x) * g(x) cũng tồn tại.'
    ],
    correctAnswer: 1,
    explanation: 'Nếu f(x) + g(x) = h(x) có giới hạn, thì g(x) = h(x) - f(x). Nếu f(x) không có giới hạn, mà h(x) có giới hạn, thì g(x) (là hiệu của một hàm có giới hạn và không có giới hạn) chắc chắn không thể có giới hạn.'
  },
  {
    id: 40,
    topic: 'Giới Hạn Hai Phía',
    difficulty: 'Tư duy',
    question: 'Cho hàm số f(x) có tính chất: lim_{x->0} (f(x)/x) = 5. Tính giới hạn lim_{x->0} [f(3x) / x].',
    options: [
      '5',
      '15',
      '5/3',
      'Không xác định'
    ],
    correctAnswer: 1,
    explanation: 'Biến đổi: f(3x)/x = 3 * [f(3x)/(3x)]. Đặt t = 3x, khi x->0 thì t->0. Khi đó lim_{t->0} 3*[f(t)/t] = 3 * 5 = 15.'
  }
];
