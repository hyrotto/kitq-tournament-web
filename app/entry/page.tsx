import React from "react";
import styles from "./page.module.css"
import {
  Link
} from "@yamada-ui/react"

export default async function Entry() {
    return (
      <div className={styles.container}>
        <h1 className={styles.TitleText}>エントリー</h1>
        <div className={styles.DescriptionText}>
          エントリー開始は<span>2月中旬</span>を予定しています。
        </div>
        ↓エントリーフォームはこちら
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_ToH3hv9i6y6NI0ajJ9fAj2xTYJRLwMEqZeRAo2XeptMXQA/viewform?usp=header"
          target="_blank"
          className={styles.EntryButton}
          >
          エントリーフォーム
        </Link>
        <h1 className={styles.SubTitleText}>エントリーリスト</h1>
        <div className={styles.EntryListText}>
          エントリーリストは
          <Link
            href="https://docs.google.com/spreadsheets/d/1VEu7CzN9mjwQEcQcd3rNAJojxx6lh-nLl2yT6H2_Aa8/edit?usp=drive_link"
            target="_blank"
            className={styles.EntryListURL}
          >
            こちら
          </Link>
        </div>
        <h1 className={styles.SubTitleText}>プライバシーポリシー</h1>
        <div className={styles.PrivacyPolicy}>
          <p
            className={styles.PrivacyPolicySection}
          >
            King&Queen杯実行委員会(以下、本会)は、本大会を開催するにあたって参加者についての個人情報を含む参加者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            個人情報の収集
          </p>
          <p className={styles.PrivacyPolicySection}>
            当会は、クイズ大会に参加申込時及び大会運営時に、個人情報を、適正な手段により取得します。
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            個人情報を収集・利用する目的
          </p>
          <p className={styles.PrivacyPolicySection}>
          当会は、参加者から取得した個人情報を以下の目的で利用します。個人情報保護法その他の法令で認められる場合を除き、ご本人の同意がない限り、利用目的の範囲を超えて、個人情報を利用することはありません。<br />
            ①クイズ大会に関する御連絡<br />
            ②クイズ大会の進行に必要な利用（ネームプレート・ネームカードの作成、得点の表示、舞台上での名前の呼出等）<br />
            ③当会が作成する公式問題集における結果の記載<br />
            ④エントリーリストへの参加者情報掲載<br />
            ⑥当会が今後主催するクイズ大会の参考情報<br />
            ⑦新型コロナウイルス感染症に関わる情報の利用<br />
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            当会によるクイズ大会運営中の撮影について
          </p>
          <p className={styles.PrivacyPolicySection}>
            当会は、クイズ大会の進行状況を撮影することがあります。この場合、参加者が被写体となっている動画又は静止画を、以下の用途で利用することがあります。<br />
            ①当会が運営する公式サイトへの掲載<br />
            ②当会が運営する公式Xへの掲載<br />
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            個人情報の安全管理
          </p>
          <p className={styles.PrivacyPolicySection}>
            当会は、大会の運営体制及びスタッフの教育、個人情報へのアクセス範囲の設定、業務委託先の監督等により、適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            個人情報の破棄
          </p>
          <p className={styles.PrivacyPolicySection}>
            当会は、クイズ大会終了後、利用目的を達成する上で必要がなくなった個人情報を、速やかに破棄するものとします。
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            個人情報の第三者提供について
          </p>
          <p className={styles.PrivacyPolicySection}>
            当会は個人情報の第三者提供について、以下のいずれかに該当する場合を除き、個人情報を第三者に開示提供いたしません。<br />
            ①ご本人様の同意がある場合
            ②利用目的の達成に必要な範囲内において業務を第三者に委託する場合
            ③法令に基づいて開示が要求される場合、および法令に基づき提供する場合
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            個人情報の開示・訂正・追加・削除等の要望
          </p>
          <p className={styles.PrivacyPolicySection}>
          当会は、個人情報について、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止または利用目的の通知に関するご本人からの申し出があった場合、ご本人であることを確認次第、個人情報保護法の定めに従って遅滞なく対応します。但し、個人情報保護法の要件を満たさない場合や当会が対応を拒否できることが、法令上定められている場合は、対応を拒否する場合がございますのでご了承下さい。
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            問い合わせ窓口
          </p>
          <p className={styles.PrivacyPolicySection}>
            個人情報の開示・訂正・追加・削除等のお申出、ご意見、ご質問、苦情、その他個人情報の取扱いに関するお問い合わせは、下記の連絡先にて受け付けます。<br />
            メール：〇〇〇〇〇@gmail.com
          </p>
          <p className={styles.PrivacyPolicyTitle}>
            プライバシーポリシーの変更について
          </p>
          <p className={styles.PrivacyPolicySection}>
            当会は、個人情報に関連する法令の変更に対応するため、又は、より良く参加者の個人情報保護を図るため、プライバシーポリシーを変更することがございます。
          </p>
        </div>
      </div>
    );
  }
  