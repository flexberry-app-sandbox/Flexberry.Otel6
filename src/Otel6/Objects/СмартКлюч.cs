﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otel6
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Смарт ключ.
    /// </summary>
    // *** Start programmer edit section *** (СмартКлюч CustomAttributes)

    // *** End programmer edit section *** (СмартКлюч CustomAttributes)
    [AutoAltered()]
    [Caption("Смарт ключ")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СмартКлючE", new string[] {
            "КодКлюча as \'Код ключа\'",
            "Статус as \'Статус\'"})]
    [View("СмартКлючL", new string[] {
            "КодКлюча as \'Код ключа\'",
            "Статус as \'Статус\'"})]
    public class СмартКлюч : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКлюча;
        
        private IIS.Otel6.Статусы fСтатус = IIS.Otel6.Статусы.4;
        
        // *** Start programmer edit section *** (СмартКлюч CustomMembers)

        // *** End programmer edit section *** (СмартКлюч CustomMembers)

        
        /// <summary>
        /// КодКлюча.
        /// </summary>
        // *** Start programmer edit section *** (СмартКлюч.КодКлюча CustomAttributes)

        // *** End programmer edit section *** (СмартКлюч.КодКлюча CustomAttributes)
        public virtual int КодКлюча
        {
            get
            {
                // *** Start programmer edit section *** (СмартКлюч.КодКлюча Get start)

                // *** End programmer edit section *** (СмартКлюч.КодКлюча Get start)
                int result = this.fКодКлюча;
                // *** Start programmer edit section *** (СмартКлюч.КодКлюча Get end)

                // *** End programmer edit section *** (СмартКлюч.КодКлюча Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СмартКлюч.КодКлюча Set start)

                // *** End programmer edit section *** (СмартКлюч.КодКлюча Set start)
                this.fКодКлюча = value;
                // *** Start programmer edit section *** (СмартКлюч.КодКлюча Set end)

                // *** End programmer edit section *** (СмартКлюч.КодКлюча Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (СмартКлюч.Статус CustomAttributes)

        // *** End programmer edit section *** (СмартКлюч.Статус CustomAttributes)
        public virtual IIS.Otel6.Статусы Статус
        {
            get
            {
                // *** Start programmer edit section *** (СмартКлюч.Статус Get start)

                // *** End programmer edit section *** (СмартКлюч.Статус Get start)
                IIS.Otel6.Статусы result = this.fСтатус;
                // *** Start programmer edit section *** (СмартКлюч.Статус Get end)

                // *** End programmer edit section *** (СмартКлюч.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СмартКлюч.Статус Set start)

                // *** End programmer edit section *** (СмартКлюч.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (СмартКлюч.Статус Set end)

                // *** End programmer edit section *** (СмартКлюч.Статус Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СмартКлючE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СмартКлючE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СмартКлючE", typeof(IIS.Otel6.СмартКлюч));
                }
            }
            
            /// <summary>
            /// "СмартКлючL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СмартКлючL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СмартКлючL", typeof(IIS.Otel6.СмартКлюч));
                }
            }
        }
    }
}
