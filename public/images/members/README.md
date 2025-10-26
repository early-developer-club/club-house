# 멤버 프로필 이미지 관리

## 폴더 구조
```
public/
  images/
    members/
      1.webp          # dain의 프로필 이미지
      2.webp          # 다음 멤버의 프로필 이미지
      3.webp          # ...
```

## 이미지 규칙

### 파일명 규칙
- 멤버 ID와 동일한 번호로 저장
- 예: 멤버 ID가 "1"이면 "1.webp"
- 확장자는 `.webp` 권장 (용량 최적화)

### 이미지 사양
- **크기**: 400x400px (정사각형)
- **형식**: WebP 권장 (JPEG, PNG도 가능)
- **용량**: 100KB 이하 권장
- **품질**: 고해상도이지만 웹 최적화된 이미지

## 새 멤버 추가 방법

1. **이미지 준비**
   - 400x400px 정사각형 이미지 준비
   - WebP 형식으로 변환 (권장)
   - 파일명을 멤버 ID로 설정 (예: "12.webp")

2. **파일 업로드**
   ```bash
   # public/images/members/ 폴더에 이미지 파일 복사
   cp new-member.webp public/images/members/12.webp
   ```

3. **데이터 업데이트**
   ```typescript
   // src/data/members.ts에 새 멤버 추가
   {
     id: "12",
     name: "새 멤버",
     role: "Developer",
     bio: "소개글",
     avatar: "L",
     profileImage: "12.webp", // 새로 추가된 이미지 파일명
     links: { ... },
     activities: ["VDD 스터디"],
     joinDate: "2024-12-30"
   }
   ```

## 이미지 최적화 도구

### WebP 변환
```bash
# ImageMagick 사용
magick input.jpg -resize 400x400 output.webp

# cwebp 사용
cwebp -q 80 input.jpg -o output.webp
```

### 온라인 도구
- [Squoosh](https://squoosh.app/) - Google의 이미지 압축 도구
- [TinyPNG](https://tinypng.com/) - PNG/JPEG 압축
- [Convertio](https://convertio.co/) - 다양한 형식 변환

## 주의사항

1. **저작권**: 업로드하는 이미지는 반드시 본인이 촬영하거나 사용 권한이 있는 이미지여야 합니다.

2. **개인정보**: 프로필 이미지는 공개적으로 노출되므로 민감한 정보가 포함되지 않도록 주의하세요.

3. **일관성**: 모든 멤버의 이미지가 비슷한 스타일과 품질을 유지하도록 노력하세요.

4. **백업**: 원본 이미지는 별도로 보관하세요.
