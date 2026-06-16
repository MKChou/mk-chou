const CASE_I18N = {
  zh: {
    'meta.title': '專題 03｜資源受限邊緣平台骨架跌倒偵測與硬體協同設計',
    'meta.description': '資源受限邊緣平台上基於骨架的跌倒偵測模型與硬體協同設計 — 從 MediaPipe 骨架擷取、輕量 1D-CNN 到 PC / Jetson / FPGA 跨平台部署與驗證。',
    'nav.label': '主導覽',
    'nav.toggle': '開啟選單',
    'nav.home': '首頁',
    'nav.projects': '專案',
    'nav.about': '關於',
    'breadcrumb.home': '首頁',
    'breadcrumb.projects': '專案',
    'lang.switch': 'EN',
    'lang.label': '切換為英文',
    'hero.eyebrow': '專題 03 · 骨架跌倒偵測 · 硬體協同設計',
    'hero.title': '資源受限邊緣平台上基於骨架的<br>跌倒偵測模型與硬體協同設計',
    'hero.lead': '以單顆攝影機擷取人體骨架，透過一個極輕量的時間卷積網路判斷「跌倒 / 正常」，並把同一個模型部署到 PC、Jetson Nano 與 FPGA（PYNQ-Z2）三種平台，驗證它在邊緣裝置上的可行性、即時性與準確度。',
    'hero.stat1': '固定測試集準確率',
    'hero.stat2': '單次模型推論',
    'hero.stat3': 'FPGA 上板準確率',
    'hero.stat4': 'FPGA 推論吞吐',
    'tag.quant': 'INT8 量化',
    's01.label': '01 — 專題背景',
    's01.h2': '為什麼要做這個題目？',
    's01.p1': '跌倒是高齡者居家意外傷害的主要原因之一，能否在事件發生的當下即時偵測並發出警報，往往決定了後續處置的黃金時間。常見的穿戴式裝置必須隨身配戴、容易被遺忘；而純影像的深度模型雖然準確，運算量卻過大，難以塞進低功耗、低成本的邊緣裝置。',
    's01.p2': '因此本專題選擇了一條折衷且務實的路線：<strong>先用 MediaPipe 把影像轉成人體骨架座標，再用一個非常輕量的 1D-CNN 對「骨架的時間變化」做分類</strong>。這樣模型不需要看原始畫面、運算量極小，同時保有足夠的辨識能力，也讓「最後能不能被硬體加速」變成一個可以認真討論的問題。',
    's01.callout.h': '核心命題',
    's01.callout.p': '設計一個「硬體友善」的跌倒偵測模型 —— 在保持高準確率的前提下，讓它小到能放進 FPGA，並用<strong>模型與硬體協同設計（Co-Design）</strong>的角度，驗證它在 PC、Jetson、FPGA 三個平台上的表現差異。',
    's02.label': '02 — 系統設計',
    's02.h2': '整體流程：從影像到警報',
    's02.p1': '整個系統是一條清楚的資料流：影像串流 → 骨架擷取 → 時間序列張量 → 1D-CNN 分類 → 跌倒判斷。骨架擷取與前處理放在 CPU，分類模型則是可被加速的核心，最後在三個平台上分別驗證。',
    's02.img1.alt': '系統流程圖：URFD 影像 → MediaPipe 骨架 → 時間序列張量 → 1D-CNN → 跌倒偵測，並在 PC / Jetson / FPGA 三平台驗證',
    's02.img1.cap': '端到端流程與三階段平台驗證（PC Baseline → Jetson 邊緣 → FPGA 加速器）。',
    's02.img2.alt': '骨架輸入示意：18 個關鍵點的 (x, y) 座標隨時間堆疊成序列',
    's02.img2.cap': '輸入是骨架關鍵點座標隨時間堆疊的序列，而非原始畫面。',
    's02.h3': '資料與輸入規格',
    's02.p2': '資料來源為 URFD 公開跌倒資料集。每段影片經 MediaPipe 抽出關鍵點後，固定整理成 <code>(36, 50)</code> 的張量：',
    's02.li1': '<strong>36 維</strong>：18 個關鍵點的 (x, y) 座標',
    's02.li2': '<strong>50 幀</strong>：以滑動視窗取的時間長度',
    's02.li3': '座標已正規化到 0~1，偵測不到的點補 0',
    's02.li4': '測試集 92 筆，採 20% 切分、固定 seed=42',
    's03.label': '03 — 模型設計與概念',
    's03.h2': '刻意「為硬體著想」的 1D-CNN',
    's03.p1': '模型本身刻意保持簡單：兩個卷積區塊加上一個分類頭。但每一個設計選擇背後，都同時考慮了「準確率」與「之後能不能上硬體」這兩件事。',
    's03.img.alt': '1D-CNN 架構：Conv 區塊一 (36→64)、區塊二 (64→128)、AdaptiveAvgPool + Linear 分類頭，輸出 Fall / Non-Fall',
    's03.img.cap': '輕量化 1D-CNN 架構。使用 ReLU6、無 Dropout、Conv 不含 bias，皆為利於 INT8 量化與硬體實作的選擇。',
    's03.h3a': '硬體友善的關鍵取捨',
    's03.li1': '<strong>用 ReLU6 取代 ReLU</strong>：輸出有上界，量化時數值範圍更穩定。',
    's03.li2': '<strong>移除 Dropout</strong>：推論期無作用，且簡化硬體資料路徑。',
    's03.li3': '<strong>Conv 不含 bias</strong>：減少參數與一組加法器，方便 HLS 實作。',
    's03.li4': '<strong>固定輸入尺寸</strong>：(36, 50) 讓硬體記憶體配置可預先決定。',
    's03.h3b': '為什麼選 1D-CNN？',
    's03.p2': '跌倒的關鍵資訊在於「骨架隨時間的變化」。1D 時間卷積剛好擅長抓這種序列特徵，且相較於 LSTM / Transformer，它的計算高度規律（大量規律的 MAC 運算）、沒有遞迴依賴，非常適合在 FPGA 上做流水線化與平行化。',
    's04.label': '04 — 概念與取捨',
    's04.h2': '最重要的決定：放棄 DPU，改做訂製加速器',
    's04.p1': '專題中段遇到一個關鍵岔路。原本打算用 Xilinx 的 DPU + Vitis AI 在 FPGA 上跑模型，但實測發現 <strong>PYNQ-Z2（Zynq-7020）資源不足以承載完整 DPU</strong>，這條路在這塊板子上行不通。與其硬湊，我選擇重新定位 FPGA 的角色：<strong>不用通用加速器，而是親手設計一個訂製的 1D-CNN 加速器 IP</strong>。',
    's04.bad.h': '原方案：DPU + Vitis AI',
    's04.bad.li1': '黑盒式通用加速器，無法展現協同設計',
    's04.bad.li2': 'IP 體積大，Z2 資源不足 — 實測不可行',
    's04.bad.li3': '偏向「使用工具」而非「設計硬體」',
    's04.good.h': '採用：訂製 HLS 加速器',
    's04.good.li1': '模型結構為硬體而優化，真正的 Co-Design',
    's04.good.li2': '只加速最關鍵的卷積，資源需求可控',
    's04.good.li3': '用 AXI-DMA + AXI-Stream 串接，INT8 定點運算',
    's04.img1.alt': '系統切分：PS（ARM Cortex-A9）負責影像與 MediaPipe 骨架擷取，PL（FPGA Fabric）負責 1D-CNN 加速器 IP 與分類判斷，透過 AXI-DMA 傳輸 INT8 骨架序列',
    's04.img1.cap': '軟硬體切分：CPU（PS）處理影像與骨架擷取（非確定性延遲），FPGA（PL）負責確定性的 1D-CNN 推論。',
    's04.img2.alt': 'Vivado 上的 FPGA 區塊設計，包含 1D-CNN 加速器 IP、DMA 與 Zynq 處理系統的連線',
    's04.img2.cap': '在 Vivado / Vitis HLS 中完成的 FPGA 加速器區塊設計與整合。',
    's05.label': '05 — 遇到的困難',
    's05.h2': '實作過程踩過的坑',
    's05.p1': '把一個模型從 PC 一路推到 FPGA，真正花時間的往往不是模型本身，而是跨平台的各種細節問題。',
    's05.c1.h': 'PYNQ-Z2 跑不動 DPU',
    's05.c1.p': '板子資源不足以承載完整 DPU IP。最後改為訂製單層加速器 + CPU 協同，反而讓專題更有設計深度。',
    's05.c2.h': 'Jetson 裝不了 MediaPipe',
    's05.c2.p': 'Jetson 環境無法安裝 mediapipe。解法：PC 先抽好骨架輸出成 <code>.npy</code>，Jetson 端直接讀骨架做推論。',
    's05.c3.h': 'Bash 腳本的 CRLF 問題',
    's05.c3.p': 'Windows 換行讓 Jetson 出現 <code>/bin/bash^M</code> 錯誤。用 <code>dos2unix</code> 轉換換行符即可解決。',
    's05.c4.h': '輸出影片歪斜、過快',
    's05.c4.p': '畫面被拉伸、播放速度異常。強制偶數尺寸、固定輸出 FPS 並統一解析度後修正。',
    's05.c5.h': 'PC / Jetson 比較資料不足',
    's05.c5.p': '比較腳本找不到對應設定的資料。將 PC 端 warmup 設為 0，讓兩平台量測條件一致。',
    's05.c6.h': '瓶頸不在模型而在前處理',
    's05.c6.p': '剖析後發現骨架擷取佔了端到端 96% 的時間，使「加速模型」的方向必須重新思考（見下節）。',
    's06.label': '06 — 實驗結果',
    's06.h2': '數據怎麼說',
    's06.h3a': '準確率與量化',
    's06.img1.alt': '固定測試集的混淆矩陣，Fall 為正類',
    's06.img1.cap': '固定測試集混淆矩陣（92 筆）。',
    's06.th.metric': '指標',
    's06.th.value': '數值',
    's06.note1': 'INT8 量化後準確率維持 <strong>95.65%</strong>，與 FP32 相比 <strong>Delta = +0.0000</strong> — 證明這個模型對量化非常友善，幾乎無損。',
    's06.h3b': '跳幀消融：準確率 vs. 速度',
    's06.img2.alt': '跳幀 stride 從 1 到 16 的準確率與 FPS 變化曲線',
    's06.img2.cap': '跳幀步長對準確率與 FPS 的影響。',
    's06.p2': '透過「跳幀」可以用準確率換取速度。Stride=1 時準確率 93%、約 21 FPS；拉到 Stride=4 仍有 89% 準確率，FPS 卻翻倍到 46。這給了實際部署一個可調的甜蜜點。',
    's06.h3c': '系統瓶頸分析',
    's06.img3.alt': '端到端各階段時間占比圓餅圖，骨架擷取佔約 96.71%',
    's06.img3.cap': '端到端各階段耗時占比。',
    's06.p3': '把端到端流程拆成五個階段後，結論很明確：<strong>骨架擷取（MediaPipe）佔掉約 96.71% 的時間</strong>，而 1D-CNN 推論只佔 1.22%（約 0.42 ms）。',
    's06.note2': '這個發現很重要 —— 真正的瓶頸是前處理與 I/O，而非模型本身。也因此「進一步加速模型」對端到端 FPS 的邊際效益其實有限，這正是硬體設計中最值得記錄的一課。',
    's06.h3d': '跨平台效能比較',
    's06.img4.alt': 'PC 與 Jetson Nano 在不同 stride 下的 FPS 比較',
    's06.img4.cap': 'PC 與 Jetson Nano 2GB 的端到端 FPS。',
    's06.img5.alt': 'FPGA 單次推論延遲的抖動直方圖，集中在約 16.6 ms',
    's06.img5.cap': 'FPGA 推論延遲分佈：穩定落在 16.58–16.85 ms。',
    's06.th.platform': '平台',
    's06.th.latency': '模型推論延遲',
    's06.th.fps': '推論 FPS',
    's06.th.trait': '特性 / 優勢',
    's06.td.pc': '高吞吐，但高功耗、延遲不確定',
    's06.td.jetson': '易開發，受 OS 排程影響',
    's06.td.fpga': '確定性延遲、低功耗、即時性',
    's06.td.e2e': '（端到端）',
    's06.note3': '值得注意的是，FPGA 上 16.62 ms 的延遲中，絕大部分（約 16.11 ms）來自 DMA 資料搬移，IP 真正的計算只佔約 0.41 ms。<strong>「推論 FPS 比較低」不代表部署價值較低</strong> —— FPGA 的賣點是確定性延遲與低功耗，這跟通用平台是不同維度的取捨。',
    's06.h3e': '失效樣本分析',
    's06.p4': '檢視模型判斷錯誤的案例，有助於理解它的極限。多數錯誤集中在「動作與跌倒高度相似」或「骨架被嚴重遮擋 / 抽取不全」的邊界情況。',
    's06.img6.alt': 'False Negative 案例：實際跌倒卻被判為正常的骨架疊圖',
    's06.img6.cap': 'False Negative（漏報）：實際跌倒被判為正常。',
    's06.img7.alt': 'False Positive 案例：實際正常動作卻被判為跌倒的骨架疊圖',
    's06.img7.cap': 'False Positive（誤報）：正常動作被誤判為跌倒。',
    's07.label': '07 — 結論',
    's07.h2': '總結與收穫',
    's07.p1': '這個專題完整走過了「模型訓練 → 量化 → 跨平台部署 → 訂製 FPGA 加速器」的全流程，並用實驗數據回答了最初的命題：<strong>一個刻意為硬體設計的輕量 1D-CNN，確實能在邊緣裝置上維持高準確率與即時性。</strong>',
    's07.li1': '輕量 1D-CNN 在固定測試集達 95.65% 準確率，INT8 量化幾乎無損。',
    's07.li2': '同一模型成功部署到 PC、Jetson、FPGA 三平台並完成量測。',
    's07.li3': 'FPGA 上板準確率 92.39%，推論吞吐約 60 FPS，延遲穩定可預測。',
    's07.li4': '剖析證實瓶頸在骨架擷取而非模型，為後續優化指出正確方向。',
    's07.li5': '從 DPU 轉向訂製加速器，體現真正的模型–硬體協同設計。',
    's07.callout.h': '最大的收穫',
    's07.callout.p': '學到的不只是「怎麼把模型變小」，而是<strong>怎麼在「準確率、速度、功耗、硬體資源」之間做取捨</strong>，以及如何用數據誠實地面對平台限制 —— 當 DPU 行不通時，重新定義問題反而打開了更有價值的方向。',
    'actions.projects': '← 返回專案列表',
    'actions.home': '回首頁',
    'footer.copy': '專題 03',
    'footer.top': '回到頂端 ↑'
  },
  en: {
    'meta.title': 'Project 03 | Skeleton-based Fall Detection Co-Design',
    'meta.description': 'Model-Hardware Co-Design for skeleton-based fall detection on resource-constrained edge platforms — from MediaPipe skeleton extraction and lightweight 1D-CNN to deployment on PC, Jetson, and FPGA.',
    'nav.label': 'Main navigation',
    'nav.toggle': 'Open menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'breadcrumb.home': 'Home',
    'breadcrumb.projects': 'Projects',
    'lang.switch': '中文',
    'lang.label': 'Switch to Chinese',
    'hero.eyebrow': 'Project 03 · Skeleton Fall Detection · Co-Design',
    'hero.title': 'Model-Hardware Co-Design for<br>Skeleton-based Fall Detection on<br>Resource-Constrained Edge Platforms',
    'hero.lead': 'Using a single camera to extract human skeletons, a tiny temporal convolutional network classifies fall vs. normal activity. The same model was deployed on PC, Jetson Nano, and FPGA (PYNQ-Z2) to validate feasibility, real-time performance, and accuracy on edge devices.',
    'hero.stat1': 'Fixed test-set accuracy',
    'hero.stat2': 'Single inference latency',
    'hero.stat3': 'FPGA on-board accuracy',
    'hero.stat4': 'FPGA inference throughput',
    'tag.quant': 'INT8 Quantization',
    's01.label': '01 — Background',
    's01.h2': 'Why this project?',
    's01.p1': 'Falls are a leading cause of injury among older adults at home. Detecting a fall in real time and triggering an alert often determines the window for effective response. Wearable devices must be worn consistently and are easily forgotten; meanwhile, image-based deep models are accurate but too heavy for low-power, low-cost edge hardware.',
    's01.p2': 'This project takes a pragmatic middle path: <strong>use MediaPipe to convert video into skeleton coordinates, then classify temporal skeleton patterns with a very lightweight 1D-CNN</strong>. The model never sees raw pixels, stays computationally tiny, retains enough discriminative power, and raises a real question — can it actually be hardware-accelerated?',
    's01.callout.h': 'Core question',
    's01.callout.p': 'Design a hardware-friendly fall detector that stays accurate yet small enough for FPGA deployment, and evaluate it across PC, Jetson, and FPGA through a <strong>model–hardware co-design</strong> lens.',
    's02.label': '02 — System Design',
    's02.h2': 'End-to-end pipeline: video to alert',
    's02.p1': 'The system follows a clear data path: video stream → skeleton extraction → time-series tensor → 1D-CNN classification → fall decision. Skeleton extraction and preprocessing run on CPU; the classifier is the acceleration target, validated on three platforms.',
    's02.img1.alt': 'System pipeline: URFD video → MediaPipe skeleton → time-series tensor → 1D-CNN → fall detection, verified on PC, Jetson, and FPGA',
    's02.img1.cap': 'End-to-end flow with three-stage platform validation (PC baseline → Jetson edge → FPGA accelerator).',
    's02.img2.alt': 'Skeleton input: 18 keypoints with (x, y) coordinates stacked over time',
    's02.img2.cap': 'Input is a time-stacked skeleton sequence, not raw video frames.',
    's02.h3': 'Data & input specification',
    's02.p2': 'Data comes from the public URFD fall dataset. After MediaPipe keypoint extraction, each clip is fixed to a <code>(36, 50)</code> tensor:',
    's02.li1': '<strong>36 dims</strong>: (x, y) for 18 keypoints',
    's02.li2': '<strong>50 frames</strong>: sliding-window temporal length',
    's02.li3': 'Coordinates normalized to 0–1; missing points padded with 0',
    's02.li4': '92 test samples, 20% split, fixed seed=42',
    's03.label': '03 — Model Design',
    's03.h2': 'A 1D-CNN built with hardware in mind',
    's03.p1': 'The model stays deliberately simple: two convolutional blocks plus a classification head. Every design choice balances accuracy against deployability on constrained hardware.',
    's03.img.alt': '1D-CNN architecture: Conv block 1 (36→64), block 2 (64→128), AdaptiveAvgPool + Linear head, output Fall / Non-Fall',
    's03.img.cap': 'Lightweight 1D-CNN. ReLU6, no Dropout, and bias-free Conv layers — all chosen for INT8 quantization and hardware implementation.',
    's03.h3a': 'Key hardware-friendly trade-offs',
    's03.li1': '<strong>ReLU6 over ReLU</strong>: bounded output stabilizes quantization ranges.',
    's03.li2': '<strong>No Dropout</strong>: inactive at inference; simplifies the hardware datapath.',
    's03.li3': '<strong>Bias-free Conv</strong>: fewer parameters and adders; easier HLS implementation.',
    's03.li4': '<strong>Fixed input shape</strong>: (36, 50) enables pre-planned on-chip memory.',
    's03.h3b': 'Why 1D-CNN?',
    's03.p2': 'Falls are encoded in how skeletons change over time. 1D temporal convolution captures that well. Unlike LSTM or Transformer, MAC operations are regular and non-recursive — ideal for FPGA pipelining and parallelism.',
    's04.label': '04 — Concepts & Trade-offs',
    's04.h2': 'The pivotal decision: drop DPU, build a custom accelerator',
    's04.p1': 'Midway through the project, a fork appeared. The original plan was Xilinx DPU + Vitis AI on FPGA, but testing showed <strong>PYNQ-Z2 (Zynq-7020) lacks resources for a full DPU</strong> — that path was infeasible on this board. Instead of forcing it, I reframed FPGA\'s role: <strong>skip the generic accelerator and hand-design a custom 1D-CNN IP</strong>.',
    's04.bad.h': 'Original plan: DPU + Vitis AI',
    's04.bad.li1': 'Black-box generic accelerator — weak co-design story',
    's04.bad.li2': 'Large IP footprint; Z2 resources insufficient — verified infeasible',
    's04.bad.li3': 'More "using a tool" than "designing hardware"',
    's04.good.h': 'Adopted: custom HLS accelerator',
    's04.good.li1': 'Model shaped for hardware — true co-design',
    's04.good.li2': 'Accelerate only the critical conv layers; resource budget stays controllable',
    's04.good.li3': 'AXI-DMA + AXI-Stream interface, INT8 fixed-point ops',
    's04.img1.alt': 'System partition: PS (ARM Cortex-A9) handles video and MediaPipe skeleton extraction; PL (FPGA fabric) runs 1D-CNN accelerator IP and classification via AXI-DMA INT8 skeleton transfer',
    's04.img1.cap': 'Software–hardware split: CPU (PS) for video and skeleton (non-deterministic latency); FPGA (PL) for deterministic 1D-CNN inference.',
    's04.img2.alt': 'Vivado block design with 1D-CNN accelerator IP, DMA, and Zynq processing system',
    's04.img2.cap': 'FPGA accelerator block design and integration in Vivado / Vitis HLS.',
    's05.label': '05 — Challenges',
    's05.h2': 'Pitfalls along the way',
    's05.p1': 'Taking a model from PC to FPGA, the hardest part is rarely the model itself — it\'s cross-platform integration details.',
    's05.c1.h': 'PYNQ-Z2 cannot run DPU',
    's05.c1.p': 'Board resources cannot fit the full DPU IP. Pivoting to a custom single-layer accelerator + CPU co-processing actually deepened the design story.',
    's05.c2.h': 'MediaPipe won\'t install on Jetson',
    's05.c2.p': 'Jetson environment lacks mediapipe. Workaround: extract skeletons on PC into <code>.npy</code> files; Jetson reads skeletons directly for inference.',
    's05.c3.h': 'Bash CRLF line endings',
    's05.c3.p': 'Windows line endings caused <code>/bin/bash^M</code> on Jetson. Fixed with <code>dos2unix</code>.',
    's05.c4.h': 'Distorted / sped-up output video',
    's05.c4.p': 'Frames were stretched and playback speed was wrong. Fixed by forcing even dimensions, fixed output FPS, and unified resolution.',
    's05.c5.h': 'Insufficient PC / Jetson comparison data',
    's05.c5.p': 'Comparison script couldn\'t find matching stride settings. Set PC warmup to 0 so both platforms measure under identical conditions.',
    's05.c6.h': 'Bottleneck is preprocessing, not the model',
    's05.c6.p': 'Profiling showed skeleton extraction consumes ~96% of end-to-end time, forcing a rethink of where acceleration actually matters (see results).',
    's06.label': '06 — Results',
    's06.h2': 'What the data shows',
    's06.h3a': 'Accuracy & quantization',
    's06.img1.alt': 'Confusion matrix on fixed test set, Fall as positive class',
    's06.img1.cap': 'Confusion matrix on the fixed 92-sample test set.',
    's06.th.metric': 'Metric',
    's06.th.value': 'Value',
    's06.note1': 'After INT8 quantization, accuracy stays at <strong>95.65%</strong> with <strong>Delta = +0.0000</strong> vs. FP32 — the model is highly quantization-friendly, essentially lossless.',
    's06.h3b': 'Frame-skipping ablation: accuracy vs. speed',
    's06.img2.alt': 'Accuracy and FPS curves for stride 1 through 16',
    's06.img2.cap': 'Effect of frame-skip stride on accuracy and FPS.',
    's06.p2': 'Frame skipping trades accuracy for speed. At stride=1: 93% accuracy, ~21 FPS. At stride=4: still 89% accuracy with FPS doubling to 46 — a tunable sweet spot for deployment.',
    's06.h3c': 'System bottleneck analysis',
    's06.img3.alt': 'End-to-end stage time breakdown pie chart; skeleton extraction ~96.71%',
    's06.img3.cap': 'End-to-end per-stage time share.',
    's06.p3': 'Breaking the pipeline into five stages makes the conclusion clear: <strong>skeleton extraction (MediaPipe) takes ~96.71%</strong> of total time, while 1D-CNN inference is only 1.22% (~0.42 ms).',
    's06.note2': 'This matters — the real bottleneck is preprocessing and I/O, not the model. Further model acceleration has diminishing returns on end-to-end FPS — a key lesson in hardware design.',
    's06.h3d': 'Cross-platform performance',
    's06.img4.alt': 'PC vs. Jetson Nano FPS across different strides',
    's06.img4.cap': 'End-to-end FPS on PC vs. Jetson Nano 2GB.',
    's06.img5.alt': 'FPGA single-inference latency histogram, clustered around ~16.6 ms',
    's06.img5.cap': 'FPGA inference latency distribution: stable at 16.58–16.85 ms.',
    's06.th.platform': 'Platform',
    's06.th.latency': 'Model inference latency',
    's06.th.fps': 'Inference FPS',
    's06.th.trait': 'Traits / advantages',
    's06.td.pc': 'High throughput, but high power and non-deterministic latency',
    's06.td.jetson': 'Easy to develop, affected by OS scheduling',
    's06.td.fpga': 'Deterministic latency, low power, real-time',
    's06.td.e2e': '(end-to-end)',
    's06.note3': 'On FPGA, most of the 16.62 ms latency (~16.11 ms) is DMA transfer; actual IP compute is only ~0.41 ms. <strong>Lower inference FPS does not mean lower deployment value</strong> — FPGA\'s strength is deterministic latency and low power, a different trade-off axis than general-purpose platforms.',
    's06.h3e': 'Error case analysis',
    's06.p4': 'Reviewing misclassified samples reveals the model\'s limits. Most errors occur at boundary cases — actions resembling falls, or severely occluded / incomplete skeleton extraction.',
    's06.img6.alt': 'False Negative: actual fall classified as normal, skeleton overlay',
    's06.img6.cap': 'False Negative (missed fall): actual fall classified as normal.',
    's06.img7.alt': 'False Positive: normal action classified as fall, skeleton overlay',
    's06.img7.cap': 'False Positive (false alarm): normal action misclassified as fall.',
    's07.label': '07 — Conclusion',
    's07.h2': 'Summary & takeaways',
    's07.p1': 'This project walked the full path — model training → quantization → cross-platform deployment → custom FPGA accelerator — and answered the original question with data: <strong>a hardware-conscious lightweight 1D-CNN can maintain high accuracy and real-time performance on edge devices.</strong>',
    's07.li1': 'Lightweight 1D-CNN reaches 95.65% on the fixed test set; INT8 quantization is nearly lossless.',
    's07.li2': 'The same model deployed and benchmarked on PC, Jetson, and FPGA.',
    's07.li3': 'FPGA on-board accuracy 92.39%, ~60 FPS throughput, stable predictable latency.',
    's07.li4': 'Profiling shows the bottleneck is skeleton extraction, not the model — pointing future optimization in the right direction.',
    's07.li5': 'Pivoting from DPU to a custom accelerator embodies true model–hardware co-design.',
    's07.callout.h': 'Biggest takeaway',
    's07.callout.p': 'Beyond "how to shrink a model," I learned <strong>how to trade off accuracy, speed, power, and hardware resources</strong> — and how to honestly face platform limits with data. When DPU didn\'t work, reframing the problem opened a more valuable direction.',
    'actions.projects': '← Back to projects',
    'actions.home': 'Back to home',
    'footer.copy': 'Project 03',
    'footer.top': 'Back to top ↑'
  }
};

(function () {
  const STORAGE_KEY = 'case3-lang';
  const html = document.documentElement;
  const metaDesc = document.querySelector('meta[name="description"]');

  function getDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
    return 'en';
  }

  function applyLang(lang) {
    const dict = CASE_I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.hasAttribute('data-i18n-attr')) return;
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (text === undefined) return;
      if (el.hasAttribute('data-i18n-html')) {
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
