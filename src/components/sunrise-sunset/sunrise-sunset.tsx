/* eslint-disable @typescript-eslint/no-explicit-any */
import { SunriseSunsetProps, SunriseSunsetWrapper } from '.'
import React from 'react'
import { LineChart, Line, Customized, ResponsiveContainer } from 'recharts'

export const SunriseSunset: React.FC<SunriseSunsetProps> = (props) => {
  return (
    <SunriseSunsetWrapper>
      <ResponsiveContainer>
        <LineChart data={props.value}>
          <Line
            dot={false}
            type="monotone"
            dataKey="altitude"
            strokeWidth={4}
            stroke="url(#lineGradient)"
          />
          <Customized component={CustomizedComponents} />
        </LineChart>
      </ResponsiveContainer>
    </SunriseSunsetWrapper>
  )
}

const CustomizedComponents = (props: any) => {
  const { formattedGraphicalItems } = props
  const nowTrue = formattedGraphicalItems[0].props.points.find(
    (e: any) => e?.payload?.now == true
  )
  const lineTrue = formattedGraphicalItems[0].props.points.find(
    (e: any) => e?.payload?.line == true
  )
  const normalizedY = ((lineTrue?.y || 0) / props.height) * 100
  return (
    <>
      <g transform={`translate(${0},${lineTrue?.y})`}>
        <svg width="100%" height="3" viewBox="0 0 100% 3" fill="#989CA6">
          <defs />
          <line
            id="Line"
            x1="0.000000"
            y1="0.500000"
            x2="500.000000"
            y2="0.500000"
            stroke="#989CA6"
            strokeOpacity="1.000000"
            strokeWidth="3.000000"
          />
        </svg>
      </g>
      <g>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={`${normalizedY - 40}%`} stopColor="#f1f1f1" />
            <stop offset={`${normalizedY - 10}%`} stopColor="#5D636B" />
            <stop offset={`${normalizedY}%`} stopColor="#5D636B" />
            <stop offset={`${normalizedY + 20}%`} stopColor="#131A23" />
          </linearGradient>
        </defs>
      </g>
      {nowTrue &&
      lineTrue &&
      nowTrue?.payload.altitude >= lineTrue?.payload.altitude ? (
        <g transform={`translate(${nowTrue?.x - 17},${nowTrue?.y - 17})`}>
          <svg
            width="34.000000"
            height="34.000000"
            viewBox="0 0 34 34"
            fill="none"
          >
            <defs>
              <filter
                id="filter_1622_467_dd"
                x="0.000000"
                y="0.000000"
                width="34.000000"
                height="34.000000"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0" dy="0" />
                <feGaussianBlur stdDeviation="3.33333" />
                <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect_dropShadow_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect_dropShadow_1"
                  result="shape"
                />
              </filter>
            </defs>
            <g filter="url(#filter_1622_467_dd)">
              <circle
                id="Ellipse"
                cx="17.000000"
                cy="17.000000"
                r="7.000000"
                fill="#FFFFFF"
                fillOpacity="1.000000"
              />
            </g>
            <circle
              id="Ellipse"
              cx="17.000000"
              cy="17.000000"
              r="6.750000"
              stroke="#F8F8F8"
              strokeOpacity="1.000000"
            />
          </svg>
        </g>
      ) : (
        <g transform={`translate(${nowTrue?.x - 17},${nowTrue?.y - 17})`}>
          <svg
            width="34.000000"
            height="34.000000"
            viewBox="0 0 34 34"
            fill="none"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <filter
                id="filter_47_3909_dd"
                x="0.000000"
                y="0.000000"
                width="34.000000"
                height="34.000000"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0" dy="0" />
                <feGaussianBlur stdDeviation="3.33333" />
                <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect_dropShadow_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect_dropShadow_1"
                  result="shape"
                />
              </filter>
            </defs>
            <g filter="url(#filter_47_3909_dd)">
              <circle
                id="Ellipse"
                cx="17.000000"
                cy="17.000000"
                r="7.000000"
                fill="#000000"
                fillOpacity="1.000000"
              />
            </g>
            <circle
              id="Ellipse"
              cx="17.000000"
              cy="17.000000"
              r="6.750000"
              stroke="#F8F8F8"
              strokeOpacity="1.000000"
              strokeWidth="1.000000"
            />
          </svg>
        </g>
      )}
    </>
  )
}
