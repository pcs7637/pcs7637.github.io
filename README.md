# GitHub Pages 포트폴리오 (정적, 무빌드)

이 저장소는 **GitHub Pages**로 바로 배포 가능한 정적 포트폴리오 스타터입니다.

## 1) 배포 절차
1. 저장소 이름을 `yourname.github.io`로 생성합니다. (*yourname은 GitHub ID*)
2. 이 폴더의 모든 파일을 저장소 루트에 업로드하거나 `git push` 합니다.
3. GitHub → Settings → Pages에서 Source를 `Deploy from a branch` / Branch `main` (root)로 선택합니다.
4. 수 초 내에 `https://yourname.github.io`에서 사이트가 열립니다.

> 사용자 페이지(`yourname.github.io`)가 아니라 프로젝트 페이지(`yourname/portfolio`)로 배포하려면, Settings → Pages에서 `/docs` 또는 `/ (root)`로 설정하고, 링크 경로를 상대경로로 조정하세요.

## 2) 구조
```
/
├─ index.html
├─ about/index.html
├─ projects/index.html
├─ contact/index.html
├─ 404.html                # SPA 라우팅 보완용 (필요 시)
└─ assets/
   ├─ css/styles.css
   └─ js/main.js
```

## 3) 커스터마이즈 팁
- 검색엔진 미리보기: `<head>`에 `meta description` 추가
- 다국어: 한국어/영어 섹션 구분 또는 별도 페이지
- 프로젝트 카드 링크를 실제 Repo/Demo/문서 링크로 교체
- Tailwind CDN 사용 중 (간단 수정에 적합). 대규모 스타일 관리가 필요하면 정식 빌드로 전환 권장.

## 4) 로컬 미리보기(선택)
정적 파일이라 브라우저로 직접 열어도 되지만, 경로 테스트를 위해 간단 서버 추천:

```bash
# Python 3
python -m http.server 5500
# http://localhost:5500 접속
```

## 5) 라이선스
MIT
