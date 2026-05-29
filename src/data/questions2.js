export const questions2 = [
  // ==========================================
  // CHỦ ĐỀ 3: MA TRẬN NGHỊCH ĐẢO (3 Câu)
  // Phân bổ: 1 Dễ, 1 Khó, 1 Tư duy
  // ==========================================
  
  // --- CÂU DỄ ---
  {
    id: 1,
    topic: 'Ma Trận Nghịch Đảo',
    difficulty: 'Dễ',
    question: 'Theo điều kiện "sống còn", ma trận vuông A có thể khả nghịch (tồn tại ma trận nghịch đảo) khi và chỉ khi:',
    options: [
      'Định thức của A bằng 0 (det(A) = 0)',
      'Định thức của A khác 0 (det(A) ≠ 0)',
      'Ma trận A là ma trận đơn vị I',
      'Ma trận A chỉ chứa các số dương'
    ],
    correctAnswer: 1,
    explanation: 'Nếu det(A) = 0, ma trận bị suy biến (Singular), nó bóp nghẹt không gian thành một điểm và không có phép màu nào khôi phục lại được. Do đó, điều kiện khả nghịch là det(A) ≠ 0.'
  },

  // --- CÂU KHÓ ---
  {
    id: 2,
    topic: 'Ma Trận Nghịch Đảo',
    difficulty: 'Khó',
    question: 'Trong các "Quy tắc vàng" của ma trận nghịch đảo, khẳng định nào sau đây là MỘT QUY TẮC ĐÚNG khi tính nghịch đảo của một tích hai ma trận A và B (giả sử cả hai đều khả nghịch)?',
    options: [
      '(AB)⁻¹ = A⁻¹B⁻¹',
      '(AB)⁻¹ = B⁻¹A',
      '(AB)⁻¹ = B⁻¹A⁻¹',
      '(AB)⁻¹ = (A + B)⁻¹'
    ],
    correctAnswer: 2,
    explanation: 'Tính chất (AB)⁻¹ = B⁻¹A⁻¹ là một tính chất cốt lõi. Lưu ý rằng khi lấy nghịch đảo của một tích, ta phải đảo ngược thứ tự của các ma trận.'
  },

  // --- CÂU TƯ DUY ---
  {
    id: 3,
    topic: 'Ma Trận Nghịch Đảo',
    difficulty: 'Tư duy',
    question: 'Khi giải hệ phương trình tuyến tính Ax = b (với A là ma trận khả nghịch), ý nghĩa cốt lõi của việc nhân nghịch đảo A⁻¹ vào hai vế là gì?',
    options: [
      'Để biến vế trái thành ma trận suy biến (det = 0).',
      'Để "xóa bỏ những gì A đã làm" với x, tìm lại nghiệm duy nhất x = A⁻¹b ("tìm lại bản ngã ban đầu").',
      'Để thay đổi giá trị của vectơ b thành một vectơ không.',
      'Để chứng minh hệ phương trình có vô số nghiệm.'
    ],
    correctAnswer: 1,
    explanation: 'Nhân A⁻¹ vào A giống như một "cỗ máy thời gian", biến A thành ma trận đơn vị I tĩnh lặng. Từ đó x = A⁻¹b giúp ta tìm lại "bản ngã" của vector x trước khi bị ma trận A biến đổi.'
  }
];
