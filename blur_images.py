"""
이미지에서 민감한 정보를 모자이크 처리하는 스크립트
"""
import cv2
import numpy as np
from pathlib import Path

def apply_mosaic(image, x, y, width, height, ratio=0.1):
    """특정 영역에 모자이크 효과 적용"""
    # 영역 추출
    roi = image[y:y+height, x:x+width]
    
    # 축소
    small = cv2.resize(roi, None, fx=ratio, fy=ratio, interpolation=cv2.INTER_LINEAR)
    
    # 다시 확대 (모자이크 효과)
    mosaic = cv2.resize(small, (width, height), interpolation=cv2.INTER_NEAREST)
    
    # 원본 이미지에 적용
    image[y:y+height, x:x+width] = mosaic
    
    return image

def blur_daughter_images():
    """딸아이 사진의 얼굴 부분을 모자이크 처리"""
    assets_dir = Path("public/assets")
    
    # daughter_cellulitis_1.jpg
    img1_path = assets_dir / "daughter_cellulitis_1.jpg"
    if img1_path.exists():
        img1 = cv2.imread(str(img1_path))
        height, width = img1.shape[:2]
        
        # 상단 1/3 영역을 모자이크 (얼굴 추정 위치)
        # 실제 위치는 이미지를 보고 조정 필요
        face_height = int(height * 0.4)
        img1 = apply_mosaic(img1, 0, 0, width, face_height, ratio=0.05)
        
        cv2.imwrite(str(img1_path), img1)
        print(f"✅ {img1_path.name} 모자이크 완료")
    
    # daughter_cellulitis_2.jpg
    img2_path = assets_dir / "daughter_cellulitis_2.jpg"
    if img2_path.exists():
        img2 = cv2.imread(str(img2_path))
        height, width = img2.shape[:2]
        
        # 상단 1/3 영역을 모자이크
        face_height = int(height * 0.4)
        img2 = apply_mosaic(img2, 0, 0, width, face_height, ratio=0.05)
        
        cv2.imwrite(str(img2_path), img2)
        print(f"✅ {img2_path.name} 모자이크 완료")

def blur_lab_report():
    """검사 결과지의 개인정보를 모자이크 처리"""
    assets_dir = Path("public/assets")
    lab_path = assets_dir / "lab_report.jpg"
    
    if lab_path.exists():
        img = cv2.imread(str(lab_path))
        height, width = img.shape[:2]
        
        # 상단 영역 (이름, 생년월일, 환자번호 등)
        # 실제 위치는 이미지를 보고 조정 필요
        header_height = int(height * 0.15)
        img = apply_mosaic(img, 0, 0, width, header_height, ratio=0.05)
        
        cv2.imwrite(str(lab_path), img)
        print(f"✅ {lab_path.name} 모자이크 완료")

if __name__ == "__main__":
    print("🔒 민감한 정보 모자이크 처리 시작...")
    blur_daughter_images()
    blur_lab_report()
    print("✅ 모든 이미지 처리 완료!")
