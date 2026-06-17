const CASE_I18N = {
  zh: {
    'meta.title': '專題 02｜DST-FallNet',
    'meta.description': 'DST-FallNet：在 Jetson Nano 2GB 上結合視覺（MoveNet + CNN）與聲音（MFCC + LSTM），以 Dempster-Shafer 證據理論做決策層融合的即時多模態跌倒偵測系統。',
    'nav.label': '主導覽',
    'nav.toggle': '開啟選單',
    'nav.home': '首頁',
    'nav.projects': '專案',
    'nav.about': '關於',
    'breadcrumb.home': '首頁',
    'breadcrumb.projects': '專案',
    'lang.switch': 'EN',
    'lang.label': '切換為英文',
    'hero.eyebrow': '專題 02 · DST-FallNet · 多模態跌倒偵測',
    'hero.title': 'DST-FallNet<br>音視覺融合與 DST 的<br>邊緣裝置即時跌倒偵測',
    'hero.lead': 'DST-FallNet 是一套即時多模態跌倒偵測系統，整合視覺（MoveNet、CNN）與聲音（LSTM）模型，以 Dempster-Shafer 證據理論（DST）做決策層融合。系統針對 Jetson Nano 2GB 等資源受限嵌入式裝置設計，支援 GPIO 告警輸出，適合長期自動監控。',
    'hero.stat1': '聲音 LSTM 準確率',
    'hero.stat2': '聲音模型 AUC',
    'hero.stat3': 'CNN 五分類準確率',
    'hero.stat4': 'DST 融合延遲',
    'tag.dst': 'Dempster-Shafer 理論',
    'link.repo': 'DST-FallNet 主程式 ↗',
    'link.cnn': 'fall-detection-cnn ↗',
    'link.lstm': 'fall-sound-detection-lstm ↗',
    'ov.label': '專題概覽',
    'ov.h2': '主要功能',
    'ov.f1': '視覺跌倒偵測 — MoveNet 姿態估計與 CNN 動作分類',
    'ov.f2': '聲音異常偵測 — MFCC 特徵搭配 LSTM',
    'ov.f3': 'Dempster-Shafer 證據理論（DST）決策層融合',
    'ov.f4': 'GPIO 輸出驅動 LED / 蜂鳴器告警',
    'ov.f5': 'CLI 儀表板 — 透過 SSH 即時監看系統狀態',
    'hw.label': '硬體環境',
    'hw.h2': '使用硬體',
    'hw.li2': 'USB 攝影機',
    'hw.li3': 'USB 麥克風',
    'hw.li4': 'LED 與蜂鳴器（GPIO 控制）',
    's01.label': '01 — 研究動機',
    's01.h2': '為什麼要做多模態？為什麼要放在邊緣？',
    's01.p1': '隨著高齡化，跌倒已成為長者受傷與死亡的主要原因之一。多數偵測系統只依賴單一感測模態——攝影機或麥克風——而兩者都各有盲點。',
    's01.h3': '單一模態系統的限制',
    's01.li1': '<strong>準確率天花板</strong>：視覺受光線與遮擋影響，聲音被背景噪音干擾，兩者都易造成誤報或漏報。',
    's01.li2': '<strong>運算量龐大</strong>：多數深度模型假設有強力 PC 或雲端，不適合資源受限硬體。',
    's01.li3': '<strong>隱私與延遲</strong>：把畫面上傳雲端分析有隱私疑慮，也無法即時告警。',
    's01.callout.h': '設計目標',
    's01.callout.p': '融合<strong>視覺 + 聲音</strong>提升準確率，全部在<strong>低功耗 Jetson Nano 2GB</strong>上運行，並驅動即時硬體告警（LED / 蜂鳴器）——而且影像完全不離開裝置。',
    's02.label': '02 — 為何用 DST',
    's02.h2': '用 Dempster-Shafer 理論取代單純平均',
    's02.p1': '單純把分數平均在面對不確定與衝突時會失靈：昏暗時相機沒把握、噪音中麥克風會誤判。這時把分數直接平均反而會拉低系統準確率。',
    's02.c1.h': '處理不確定性',
    's02.c1.p': '可以把信念明確分配給「未知」，比單一機率值更具表達力。',
    's02.c2.h': '融合衝突資訊',
    's02.c2.p': '當視覺與聲音不一致時，DST 計算衝突係數 K，並把信任重新分配給較可靠的模態。',
    's02.c3.h': '動態權重',
    's02.c3.p': '不需手動設定視覺/聲音權重，DST 會依當前輸入決定該相信哪一邊。',
    's03.label': '03 — 系統架構',
    's03.h2': '四條協同運作的執行緒',
    's03.p1': '系統以四條並行執行緒運作，讓感測、融合與硬體控制彼此不阻塞——這對在 2GB 板子上維持即時行為至關重要。',
    's03.t1.h': '視覺姿態推論',
    's03.t1.p': '：擷取畫面、前處理後送入 MoveNet ONNX → 17 個關鍵點與信心值；計算身體傾斜角以標記可疑姿態。',
    's03.t2.h': '聲音辨識',
    's03.t2.p': '：連續錄製 3 秒音訊片段，轉成 MFCC，送入 LSTM ONNX → 輸出跌倒聲音分數（0–1）。',
    's03.t3.h': '融合與 CNN 驗證',
    's03.t3.p': '：以 DST 融合視覺與聲音分數；若超過門檻，再以五分類 CNN 確認動作，並決定是否觸發 GPIO。',
    's03.t4.h': 'GPIO 控制與按鈕監看',
    's03.t4.p': '：驅動 LED / 蜂鳴器輸出，監看重置按鈕、清除跌倒事件並重設系統狀態。',
    's03.callout.h': '核心元件',
    's03.callout.p': 'MoveNet 姿態估計 · MFCC + LSTM 聲音 · DST 決策融合 · 自訓五分類 CNN（站 / 坐 / 躺 / 彎腰 / 爬）· Jetson Nano 2GB 上 ONNX 推論。',
    's04.label': '04 — 視覺模組',
    's04.h2': 'MoveNet 姿態 + 自訓 CNN 驗證',
    's04.h3a': 'MoveNet 姿態估計',
    's04.p1': 'MoveNet 提供快速且準確的 17 點姿態估計，適合嵌入式裝置。關鍵點與信心值用來估算身體傾斜角與重心，作為第一層跌倒線索。模型量化為 INT8 並從 TFLite 轉為 ONNX，在幾乎不損準確率下大幅縮小體積與運算量，使其能在 Jetson Nano 上穩定即時運行。',
    's04.h3b': '自訓五分類 CNN 驗證',
    's04.p2': '當 DST 融合分數越過門檻，自訓 CNN 會把動作分類為站立、坐下、躺臥、彎腰或爬行並給出信心值。這道第二關大幅降低誤報。',
    's04.li1': '<strong>資料集</strong>：公開 Fall Detection Dataset，共 15,402 張已標註影像。',
    's04.li2': '<strong>切分</strong>：80% 訓練 / 20% 驗證，訓練時即時監看準確率與損失。',
    's04.li3': '<strong>輸入</strong>：192×192×4；推論約 20–40 ms；準確率 87.4%。',
    's05.label': '05 — 聲音模組',
    's05.h2': 'MFCC 特徵 + LSTM 聲音分類',
    's05.p1': '麥克風持續錄音，切成 3 秒片段。經降噪與音量正規化後，每段轉為 40 維 MFCC 特徵圖（3 秒、22050 Hz）送入 LSTM。',
    's05.h3a': '模型與訓練',
    's05.li1': '<strong>架構</strong>：LSTM(64) → Dropout(0.5) → Dense(32, ReLU) → Dense(1, sigmoid)',
    's05.li2': '<strong>損失 / 優化器</strong>：binary cross-entropy / Adam',
    's05.li3': '<strong>訓練</strong>：30 epochs、batch 16、80/20 切分',
    's05.li4': '<strong>資料集</strong>：AFE — Sound Analysis for Fall Event detection',
    's05.h3b': '測試集指標',
    's05.th.metric': '指標',
    's05.th.value': '數值',
    's05.note': '混淆矩陣 [[91, 2], [3, 94]]，ROC 曲線近乎完美。',
    's06.label': '06 — 融合與決策',
    's06.h2': '決策層的後期融合（Late Fusion）',
    's06.p1': '每個模態各自產生決策，分數轉為信念分配後由 DST 融合成統一信心值與衝突係數 K。這種後期（決策層）融合讓每個模型各展所長，當某一模態有雜訊時仍保持穩健。',
    's06.li1': '<strong>門檻與觸發</strong>：融合信心越過門檻後由 CNN 確認；高風險動作（躺臥 / 爬行）若超過告警門檻即觸發蜂鳴器 / LED 並記錄事件。',
    's06.li2': '<strong>衝突處理</strong>：模態不一致時，K 會把信任重新分配給較可靠來源，避免單一感測器失誤導致系統失靈。',
    's06.li3': '<strong>可配置</strong>：可選擇僅視覺、僅聲音或兩者並用，並依環境（安靜居家 vs. 吵雜公共空間）調整門檻。',
    's07.label': '07 — CLI 儀表板',
    's07.h2': '為嵌入式而生的輕量監控',
    's07.p1': '文字式儀表板以分區表格呈現即時狀態，並用顏色標示（紅 = 告警、綠 = 正常）。可透過 SSH 運行，適合無螢幕的邊緣裝置。',
    's07.li1': '執行狀態：記憶體、CPU、延遲',
    's07.li2': 'MoveNet 關鍵點與信心值',
    's07.li3': '聲音 MFCC 特徵與 LSTM 分數',
    's07.li4': 'DST 融合分數與衝突係數',
    's07.li5': 'CNN 多分類結果與告警狀態',
    's07.li6': '事件紀錄：時間、分數與動作類型',
    's08.label': '08 — 效能',
    's08.h2': '模型效能總覽',
    's08.th1': '模型',
    's08.th2': '輸入形狀',
    's08.th3': '延遲',
    's08.th4': '準確率',
    's08.th5': '狀態',
    's08.deployed': '已部署',
    's08.deployed2': '已部署',
    's08.deployed3': '已部署',
    's08.pose': '姿態估計',
    's08.eval': '評估中',
    's08.note': 'DST 融合僅增加數十微秒，因此相對於模型推論成本，多模態的穩健度幾乎是「免費」取得的。',
    's09.label': '09 — 未來工作',
    's09.h2': '接下來的方向',
    's09.f1': '將 ONNX 模型轉為 TensorRT，進一步加速邊緣推論。',
    's09.f2': '從公開資料集轉向自行蒐集的資料，提升真實場景的相關性。',
    's09.f3': '加入通知系統，偵測到跌倒時即時通報照護者。',
    's09.f4': '在真實場景驗證並對照單模型與多模態的準確率。',
    'repo.label': '原始碼',
    'repo.h2': 'GitHub 倉庫與執行方式',
    'repo.p1': '完整嵌入式系統程式碼位於 GitHub 上的 <a href="https://github.com/MKChou/DST-FallNet" target="_blank" rel="noopener">DST-FallNet</a> 倉庫。CNN 與 LSTM 的訓練程式分別放在獨立 repo，匯出的 ONNX 模型在執行時載入。',
    'repo.tree.h3': '專案目錄結構',
    'repo.install.h3': '安裝',
    'repo.install.li1': '安裝 Python 3.8 或以上',
    'repo.install.li2': '安裝相依套件：<code>pip install -r requirements.txt</code>',
    'repo.run.h3': '執行方式',
    'repo.run.li1': '進入 <code>src/</code> 目錄',
    'repo.run.li2': '執行主程式：<code>python main.py</code>',
    'repo.models.h': '模型檔案',
    'repo.models.p': '執行前請將下載的 ONNX 模型放入 <code>models/</code> 目錄。模型下載連結見 GitHub README，或洽作者取得。',
    'repo.notes.h': '注意事項',
    'repo.notes.li1': '需要 Jetson Nano 2GB 與正確的 GPIO 接線',
    'repo.notes.li2': '所有 <code>.onnx</code> 模型檔必須放在 <code>models/</code> 目錄',
    'repo.notes.li3': '執行時產生的影像與暫存檔不建議上傳至 GitHub',
    'actions.projects': '← 返回專案列表',
    'actions.home': '回首頁',
    'footer.copy': '專題 02',
    'footer.top': '回到頂端 ↑'
  },
  en: {
    'meta.title': 'Project 02 | DST-FallNet',
    'meta.description': 'DST-FallNet — real-time multimodal fall detection fusing vision (MoveNet + CNN) and audio (MFCC + LSTM) with Dempster-Shafer Theory on Jetson Nano 2GB.',
    'nav.label': 'Main navigation',
    'nav.toggle': 'Open menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'breadcrumb.home': 'Home',
    'breadcrumb.projects': 'Projects',
    'lang.switch': '中文',
    'lang.label': 'Switch to Chinese',
    'hero.eyebrow': 'Project 02 · DST-FallNet · Multimodal Fall Detection',
    'hero.title': 'DST-FallNet<br>Real-Time Multimodal Fall Detection via<br>Audio-Visual Fusion and DST on Edge Devices',
    'hero.lead': 'DST-FallNet is a real-time multimodal fall detection system that integrates visual (MoveNet, CNN) and audio (LSTM) models, utilizing Dempster-Shafer Theory for decision-level fusion. Designed for resource-constrained embedded devices such as Jetson Nano 2GB, with GPIO output for alerts — suitable for long-term automated monitoring.',
    'hero.stat1': 'Audio LSTM accuracy',
    'hero.stat2': 'Audio AUC',
    'hero.stat3': 'CNN 5-class accuracy',
    'hero.stat4': 'DST fusion latency',
    'tag.dst': 'Dempster-Shafer Theory',
    'link.repo': 'DST-FallNet repo ↗',
    'link.cnn': 'fall-detection-cnn ↗',
    'link.lstm': 'fall-sound-detection-lstm ↗',
    'ov.label': 'Overview',
    'ov.h2': 'Main features',
    'ov.f1': 'Visual fall detection — MoveNet pose estimation and CNN action classification',
    'ov.f2': 'Audio anomaly detection — MFCC features with LSTM',
    'ov.f3': 'Dempster-Shafer Theory (DST) decision-level fusion',
    'ov.f4': 'GPIO output for LED / buzzer alerts',
    'ov.f5': 'CLI dashboard for real-time system status over SSH',
    'hw.label': 'Hardware',
    'hw.h2': 'Hardware used',
    'hw.li2': 'USB camera',
    'hw.li3': 'USB microphone',
    'hw.li4': 'LED and buzzer (GPIO control)',
    's01.label': '01 — Motivation',
    's01.h2': 'Why multimodal, and why on the edge?',
    's01.p1': 'With an aging population, falls are a leading cause of injury and death among the elderly. Most detection systems rely on a single modality — a camera or a microphone — and each has blind spots.',
    's01.h3': 'Limits of single-modality systems',
    's01.li1': '<strong>Accuracy ceiling</strong>: vision suffers under poor lighting and occlusion; audio is fooled by background noise — both cause false alarms and misses.',
    's01.li2': '<strong>Heavy compute</strong>: most deep models assume a powerful PC or cloud, unsuitable for constrained hardware.',
    's01.li3': '<strong>Privacy &amp; latency</strong>: uploading frames to the cloud raises privacy concerns and cannot give real-time alerts.',
    's01.callout.h': 'Design goals',
    's01.callout.p': 'Fuse <strong>vision + audio</strong> to lift accuracy, run fully on a <strong>low-power Jetson Nano 2GB</strong>, and drive real-time hardware alerts (LED / buzzer) — all without sending video off-device.',
    's02.label': '02 — Why DST',
    's02.h2': 'Dempster-Shafer Theory over naive averaging',
    's02.p1': 'Simple score averaging breaks down under uncertainty and conflict: the camera may be unsure in dim light, the microphone may misread noise. Averaging those scores can actively hurt accuracy.',
    's02.c1.h': 'Handles uncertainty',
    's02.c1.p': 'Belief can be explicitly assigned to "unknown" — more expressive than a single probability.',
    's02.c2.h': 'Fuses conflict',
    's02.c2.p': 'When vision and audio disagree, DST computes a conflict coefficient K and reweights toward the more reliable source.',
    's02.c3.h': 'Dynamic weights',
    's02.c3.p': 'No manual vision/audio weight — DST decides per input which modality to trust.',
    's03.label': '03 — System Architecture',
    's03.h2': 'Four cooperating threads',
    's03.p1': 'The system runs as four concurrent threads so sensing, fusion, and hardware control never block each other — essential for real-time behavior on a 2GB board.',
    's03.t1.h': 'Visual pose inference',
    's03.t1.p': ': capture frames, preprocess, run MoveNet ONNX → 17 keypoints + confidence; compute body tilt to flag suspicious postures.',
    's03.t2.h': 'Audio recognition',
    's03.t2.p': ': record 3-second clips, convert to MFCC, run the LSTM ONNX → a fall-sound score (0–1).',
    's03.t3.h': 'Fusion &amp; CNN verification',
    's03.t3.p': ': fuse vision + audio scores with DST; if above threshold, a 5-class CNN confirms the action and decides whether to fire GPIO.',
    's03.t4.h': 'GPIO &amp; button monitoring',
    's03.t4.p': ': drive LED / buzzer outputs, watch the reset button, clear fall events, and reset system state.',
    's03.callout.h': 'Core components',
    's03.callout.p': 'MoveNet pose estimation · MFCC + LSTM audio · DST decision fusion · custom 5-class CNN (standing / sitting / lying / bending / crawling) · ONNX inference on Jetson Nano 2GB.',
    's04.label': '04 — Visual Component',
    's04.h2': 'MoveNet pose + custom CNN verification',
    's04.h3a': 'MoveNet pose estimation',
    's04.p1': 'MoveNet gives fast, accurate 17-keypoint pose estimation, ideal for embedded devices. Keypoints and confidence feed a body-tilt and center-of-gravity estimate as the first fall cue. The model is quantized to INT8 and converted from TFLite to ONNX, shrinking size and compute with minimal accuracy loss for stable real-time use on Jetson Nano.',
    's04.h3b': 'Custom 5-class CNN verification',
    's04.p2': 'When the DST fusion score crosses the threshold, a custom CNN classifies the action into standing, sitting, lying, bending, or crawling with a confidence score. This second stage sharply cuts false positives.',
    's04.li1': '<strong>Dataset</strong>: public Fall Detection Dataset — 15,402 labeled images.',
    's04.li2': '<strong>Split</strong>: 80% train / 20% validation, with live accuracy &amp; loss monitoring.',
    's04.li3': '<strong>Input</strong>: 192×192×4; inference ~20–40 ms; accuracy 87.4%.',
    's05.label': '05 — Audio Component',
    's05.h2': 'MFCC features + LSTM sound classifier',
    's05.p1': 'The microphone continuously records, segmenting into 3-second clips. After noise reduction and volume normalization, each clip becomes a 40-dimension MFCC feature map (3 s, 22050 Hz) fed to the LSTM.',
    's05.h3a': 'Model &amp; training',
    's05.li1': '<strong>Architecture</strong>: LSTM(64) → Dropout(0.5) → Dense(32, ReLU) → Dense(1, sigmoid)',
    's05.li2': '<strong>Loss / optimizer</strong>: binary cross-entropy / Adam',
    's05.li3': '<strong>Training</strong>: 30 epochs, batch 16, 80/20 split',
    's05.li4': '<strong>Dataset</strong>: AFE — Sound Analysis for Fall Event detection',
    's05.h3b': 'Test-set metrics',
    's05.th.metric': 'Metric',
    's05.th.value': 'Value',
    's05.note': 'Confusion matrix [[91, 2], [3, 94]] — a near-perfect ROC curve.',
    's06.label': '06 — Fusion &amp; Decision',
    's06.h2': 'Late fusion at the decision level',
    's06.p1': 'Each modality produces its own decision; their scores become belief assignments and DST fuses them into a unified confidence plus a conflict coefficient K. This late (decision-level) fusion lets each model play to its strengths and stays robust when one modality is noisy.',
    's06.li1': '<strong>Threshold &amp; trigger</strong>: once fused confidence passes the threshold, the CNN confirms; a high-risk action (lying / crawling) above the alert threshold fires the buzzer / LED and logs the event.',
    's06.li2': '<strong>Conflict handling</strong>: when modalities disagree, K reallocates trust to the more reliable source, preventing single-sensor failure.',
    's06.li3': '<strong>Configurable</strong>: choose vision-only, audio-only, or both, and tune thresholds per environment (quiet home vs. noisy public space).',
    's07.label': '07 — CLI Dashboard',
    's07.h2': 'Lightweight monitoring for embedded use',
    's07.p1': 'A text-based dashboard shows live status in organized tables with color coding (red = alert, green = normal). It runs over SSH, ideal for headless edge devices.',
    's07.li1': 'Runtime status: memory, CPU, latency',
    's07.li2': 'MoveNet keypoints &amp; confidence',
    's07.li3': 'Audio MFCC features &amp; LSTM scores',
    's07.li4': 'DST fusion score &amp; conflict coefficient',
    's07.li5': 'CNN multi-class results &amp; alert state',
    's07.li6': 'Event log with time, score, and action type',
    's08.label': '08 — Performance',
    's08.h2': 'Model performance summary',
    's08.th1': 'Model',
    's08.th2': 'Input shape',
    's08.th3': 'Latency',
    's08.th4': 'Accuracy',
    's08.th5': 'Status',
    's08.deployed': 'Deployed',
    's08.deployed2': 'Deployed',
    's08.deployed3': 'Deployed',
    's08.pose': 'Pose estimation',
    's08.eval': 'Under evaluation',
    's08.note': 'The DST fusion step adds only microseconds, so multimodal robustness comes essentially for free relative to the model inference cost.',
    's09.label': '09 — Future Work',
    's09.h2': 'Where it goes next',
    's09.f1': 'Convert ONNX models to TensorRT to further speed up edge inference.',
    's09.f2': 'Move from public datasets to custom-collected data for higher real-world relevance.',
    's09.f3': 'Add a notification system for instant caregiver alerts on a detected fall.',
    's09.f4': 'Benchmark single-model vs. multimodal accuracy in real-world validation.',
    'repo.label': 'Repository',
    'repo.h2': 'Source code & how to run',
    'repo.p1': 'The full embedded system lives in the <a href="https://github.com/MKChou/DST-FallNet" target="_blank" rel="noopener">DST-FallNet</a> repository on GitHub. Separate repos hold the CNN and LSTM training code; exported ONNX models are loaded at runtime.',
    'repo.tree.h3': 'Project directory structure',
    'repo.install.h3': 'Installation',
    'repo.install.li1': 'Install Python 3.8 or above',
    'repo.install.li2': 'Install dependencies: <code>pip install -r requirements.txt</code>',
    'repo.run.h3': 'How to run',
    'repo.run.li1': 'Enter the <code>src/</code> directory',
    'repo.run.li2': 'Run the main program: <code>python main.py</code>',
    'repo.models.h': 'Model files',
    'repo.models.p': 'Place downloaded ONNX models in the <code>models/</code> directory before running. Model download links are documented in the GitHub README or available on request.',
    'repo.notes.h': 'Notes',
    'repo.notes.li1': 'Jetson Nano 2GB and correct GPIO wiring are required',
    'repo.notes.li2': 'All <code>.onnx</code> model files must be present under <code>models/</code>',
    'repo.notes.li3': 'Runtime-generated images and temporary files are not recommended for GitHub upload',
    'actions.projects': '← Back to projects',
    'actions.home': 'Back to home',
    'footer.copy': 'Project 02',
    'footer.top': 'Back to top ↑'
  }
};

(function () {
  const STORAGE_KEY = 'site-lang';
  const html = document.documentElement;
  const metaDesc = document.querySelector('meta[name="description"]');

  function getDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
    return 'en';
  }

  function usesHtmlMarkup(text) {
    return /<[a-z][\s\S]*?>/i.test(text);
  }

  function applyLang(lang) {
    const dict = CASE_I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.hasAttribute('data-i18n-attr')) return;
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (text === undefined) return;
      if (el.hasAttribute('data-i18n-html') || usesHtmlMarkup(text)) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      const text = dict[key];
      if (text !== undefined) el.alt = text;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      const attr = el.getAttribute('data-i18n-attr');
      if (text !== undefined && attr) el.setAttribute(attr, text);
    });

    html.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.title = dict['meta.title'];
    if (metaDesc) metaDesc.content = dict['meta.description'];

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = dict['lang.switch'];
      toggle.setAttribute('aria-label', dict['lang.label']);
      toggle.setAttribute('data-lang', lang === 'zh' ? 'en' : 'zh');
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  const initial = getDefaultLang();
  applyLang(initial);

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = toggle.getAttribute('data-lang') || (initial === 'zh' ? 'en' : 'zh');
      applyLang(next);
    });
  }
})();
