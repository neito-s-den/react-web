{{/* Expand the name of the chart. */}}
{{- define "nsd.name" -}}
{{- default $.Chart.Name $.Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/* Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name. */}}
{{- define "nsd.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "nsd.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- /* nsd.version is the version of the deployed NLU Service.
Used as the container image tag */}}
{{ define "nsd.version" -}}
{{ default .Chart.AppVersion .Values.imagesConfiguration.global.tag }}
{{- end -}}

{{/* Common labels found at : https://helm.sh/docs/chart_best_practices/labels/#standard-labels*/}}
{{- define "nsd.commonLabels" -}}
{{ include "nsd.selectorLabels" . }}
app.kubernetes.io/part-of: nsd
app.kubernetes.io/version: {{ include "nsd.version" . }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
helm.sh/chart: {{ include "nsd.chart" . }}
{{- if .Values.globalLabels }}
{{ toYaml .Values.globalLabels }}
{{- end -}}
{{- end }}

{{- define "nsd.globalAnnotations" -}}
{{- if .Values.globalAnnotations }}
{{- with .Values.globalAnnotations }}
{{- toYaml . }}
{{- end -}}
{{- end -}}
{{- end }}

{{- define "nsd.selectorLabels" -}}
app.kubernetes.io/instance: {{ include "nsd.fullname" . }}
{{- end }}

{{- /* nsd.namespace is the default deployment namespace for the release */}}
{{ define "nsd.namespace" -}}
{{ default "default" .Release.Namespace }}
{{- end -}}

{{- /* nsd.imagePullSecrets will build the string array of secret name of ImagePullSecrets
  at the condition that either .Values.deployment.imagePullSecrets or .Values.managedImagePullSecret
  is not empty */}}
{{ define "nsd.imagePullSecrets" -}}
{{- if or .Values.imagePullSecrets .Values.managedImagePullSecret -}}
imagePullSecrets:
{{- if .Values.managedImagePullSecret }}
  - name: managed-regcred-{{ include "nsd.fullname" . }}
{{- end -}}
{{- with .Values.imagePullSecrets -}}
{{ toYaml . | nindent 2 }}
{{- end -}}
{{- end -}}
{{- end -}}

{{- /*** Image URL Section ***/ -}}
{{- /* nsd.globalImage.repo */}}
{{ define "nsd.globalImage.repo" -}}
{{ default "ghcr.io/neito-s-den/react-web/app" .Values.imagesConfiguration.global.repo }}
{{- end -}}

{{- /* nsd.globalImage.tag */}}
{{ define "nsd.globalImage.tag" -}}
{{ default .Chart.AppVersion .Values.imagesConfiguration.global.tag }}
{{- end -}}

{{- /* nsd.globalImage.url */}}
{{ define "nsd.globalImage.url" -}}
{{ printf "%s:%s" (include "nsd.globalImage.repo" .) (include "nsd.globalImage.tag" .)}}
{{- end -}}

{{- /* nsd.reactImage.repo */}}
{{ define "nsd.reactImage.repo" -}}
{{ default (include "nsd.globalImage.repo" .) .Values.imagesConfiguration.custom.react.repo }}
{{- end -}}

{{- /* nsd.reactImage.tag */}}
{{ define "nsd.reactImage.tag" -}}
{{ default (include "nsd.globalImage.tag" .) .Values.imagesConfiguration.custom.react.tag }}
{{- end -}}

{{- /* nsd.reactImage.url */}}
{{ define "nsd.reactImage.url" -}}
{{ printf "%s:%s" (include "nsd.reactImage.repo" .) (include "nsd.reactImage.tag" .) }}
{{- end -}}