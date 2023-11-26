import Script from 'next/script'

export const HeadScript = (trackingID: string) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          
          function gtag(){dataLayer.push(arguments);}
          
          gtag('js', new Date());
          gtag('config', '${trackingID}');
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
        `}
      </Script>
    </>
  )
}
