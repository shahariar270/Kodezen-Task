

export default function Topbar() {
  return (
    <div className="kzui-topbar-container">

        <div className="kzui-topbar-list">

            <img className="kzui-topbar-img" src='/wordpress.png' alt="" />

            <ul>
               <li>
                <img src="/home.png" alt="" />
               <span> Academylmsrevamp</span>
               </li>
               <li>
                <img src="/chart.png" alt="" />
               <span> Insights</span>
               </li>
            </ul>
        </div>

        <div className="kzui-topbar-right">
            <span>Wptest1</span>
            <img src="/Avatar.png" alt="" />
        </div>
    </div>
  )
}
